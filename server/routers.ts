import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { storagePut } from "./storage";
import {
  createUploadedFile,
  getUploadedFiles,
  getUploadedFileById,
  deleteUploadedFile,
  upsertAnnotation,
  getAnnotationsByUser,
  getAnnotationBySlideAndUser,
  getBookmarkedSlides,
} from "./db";
import { z } from "zod";
import { nanoid } from "nanoid";

export const appRouter = router({
  system: systemRouter,

  // ─── Auth ────────────────────────────────────────────────────────────────────
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ─── File Storage ─────────────────────────────────────────────────────────────
  files: router({
    /**
     * Upload a file to S3 and persist metadata to the database.
     * Accepts base64-encoded file content from the frontend.
     */
    upload: protectedProcedure
      .input(
        z.object({
          filename: z.string().min(1).max(512),
          mimeType: z.string().min(1).max(128),
          base64Data: z.string().min(1),
          sizeBytes: z.number().int().positive(),
          slideId: z.string().max(32).optional(),
          description: z.string().max(1000).optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Decode base64 to buffer
        const buffer = Buffer.from(input.base64Data, "base64");

        // Build a unique S3 key
        const ext = input.filename.split(".").pop() ?? "bin";
        const fileKey = `epu-uploads/${ctx.user.id}-${nanoid(8)}.${ext}`;

        // Upload to S3
        const { url } = await storagePut(fileKey, buffer, input.mimeType);

        // Persist metadata
        const record = await createUploadedFile({
          fileKey,
          url,
          originalName: input.filename,
          mimeType: input.mimeType,
          sizeBytes: input.sizeBytes,
          slideId: input.slideId ?? null,
          description: input.description ?? null,
          uploadedBy: ctx.user.id,
        });

        return record;
      }),

    /**
     * List all uploaded files, optionally filtered by slideId.
     */
    list: publicProcedure
      .input(z.object({ slideId: z.string().optional() }))
      .query(async ({ input }) => {
        return getUploadedFiles(input.slideId);
      }),

    /**
     * Get a single file by its database ID.
     */
    get: publicProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .query(async ({ input }) => {
        const file = await getUploadedFileById(input.id);
        if (!file) throw new Error("File not found");
        return file;
      }),

    /**
     * Delete a file record (admin or owner only).
     */
    delete: protectedProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ input, ctx }) => {
        const file = await getUploadedFileById(input.id);
        if (!file) throw new Error("File not found");
        if (file.uploadedBy !== ctx.user.id && ctx.user.role !== "admin") {
          throw new Error("Forbidden: you do not own this file");
        }
        await deleteUploadedFile(input.id);
        return { success: true };
      }),
  }),

  // ─── Slide Annotations ────────────────────────────────────────────────────────
  annotations: router({
    /**
     * Save or update a note/bookmark for a slide.
     */
    upsert: protectedProcedure
      .input(
        z.object({
          slideId: z.string().min(1).max(32),
          note: z.string().max(5000).optional(),
          bookmarked: z.boolean().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return upsertAnnotation({
          slideId: input.slideId,
          userId: ctx.user.id,
          note: input.note ?? null,
          bookmarked: input.bookmarked ?? false,
        });
      }),

    /**
     * Get all annotations for the current user.
     */
    myAnnotations: protectedProcedure.query(async ({ ctx }) => {
      return getAnnotationsByUser(ctx.user.id);
    }),

    /**
     * Get annotation for a specific slide by the current user.
     */
    bySlide: protectedProcedure
      .input(z.object({ slideId: z.string().min(1).max(32) }))
      .query(async ({ input, ctx }) => {
        return getAnnotationBySlideAndUser(input.slideId, ctx.user.id);
      }),

    /**
     * Get all bookmarked slides for the current user.
     */
    bookmarks: protectedProcedure.query(async ({ ctx }) => {
      return getBookmarkedSlides(ctx.user.id);
    }),
  }),
});

export type AppRouter = typeof appRouter;
