import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, bigint } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─── Uploaded Files ───────────────────────────────────────────────────────────
// Stores metadata for every file uploaded to S3.
// The actual bytes live in S3; this table is the source of truth for queries.

export const uploadedFiles = mysqlTable("uploaded_files", {
  id: int("id").autoincrement().primaryKey(),
  /** S3 object key — unique path inside the bucket */
  fileKey: varchar("fileKey", { length: 512 }).notNull().unique(),
  /** Public CDN / presigned URL returned by storagePut */
  url: text("url").notNull(),
  /** Original filename as provided by the uploader */
  originalName: varchar("originalName", { length: 512 }).notNull(),
  /** MIME type, e.g. image/png, application/pdf */
  mimeType: varchar("mimeType", { length: 128 }).notNull(),
  /** File size in bytes */
  sizeBytes: bigint("sizeBytes", { mode: "number" }).notNull(),
  /** Optional: which slide this file is associated with (null = general) */
  slideId: varchar("slideId", { length: 32 }),
  /** Optional: free-text description or caption */
  description: text("description"),
  /** Uploader user id (null = anonymous / system) */
  uploadedBy: int("uploadedBy"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type UploadedFile = typeof uploadedFiles.$inferSelect;
export type InsertUploadedFile = typeof uploadedFiles.$inferInsert;

// ─── Slide Annotations ────────────────────────────────────────────────────────
// Allows users to persist notes / bookmarks against individual slides.

export const slideAnnotations = mysqlTable("slide_annotations", {
  id: int("id").autoincrement().primaryKey(),
  slideId: varchar("slideId", { length: 32 }).notNull(),
  userId: int("userId").notNull(),
  note: text("note"),
  bookmarked: boolean("bookmarked").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SlideAnnotation = typeof slideAnnotations.$inferSelect;
export type InsertSlideAnnotation = typeof slideAnnotations.$inferInsert;