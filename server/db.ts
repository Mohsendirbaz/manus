import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  users,
  uploadedFiles,
  InsertUploadedFile,
  slideAnnotations,
  InsertSlideAnnotation,
} from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// ─── User Helpers ─────────────────────────────────────────────────────────────

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = "admin";
      updateSet.role = "admin";
    }

    if (!values.lastSignedIn) values.lastSignedIn = new Date();
    if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();

    await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ─── Uploaded Files Helpers ───────────────────────────────────────────────────

export async function createUploadedFile(file: InsertUploadedFile) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(uploadedFiles).values(file);
  const result = await db
    .select()
    .from(uploadedFiles)
    .where(eq(uploadedFiles.fileKey, file.fileKey))
    .limit(1);
  return result[0];
}

export async function getUploadedFiles(slideId?: string) {
  const db = await getDb();
  if (!db) return [];
  if (slideId) {
    return db
      .select()
      .from(uploadedFiles)
      .where(eq(uploadedFiles.slideId, slideId))
      .orderBy(desc(uploadedFiles.createdAt));
  }
  return db.select().from(uploadedFiles).orderBy(desc(uploadedFiles.createdAt));
}

export async function getUploadedFileById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(uploadedFiles).where(eq(uploadedFiles.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function deleteUploadedFile(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(uploadedFiles).where(eq(uploadedFiles.id, id));
}

// ─── Slide Annotations Helpers ────────────────────────────────────────────────

export async function upsertAnnotation(annotation: InsertSlideAnnotation) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if annotation already exists for this user + slide
  const existing = await db
    .select()
    .from(slideAnnotations)
    .where(
      and(
        eq(slideAnnotations.slideId, annotation.slideId),
        eq(slideAnnotations.userId, annotation.userId)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    await db
      .update(slideAnnotations)
      .set({ note: annotation.note, bookmarked: annotation.bookmarked })
      .where(eq(slideAnnotations.id, existing[0].id));
    const updated = await db
      .select()
      .from(slideAnnotations)
      .where(eq(slideAnnotations.id, existing[0].id))
      .limit(1);
    return updated[0];
  } else {
    await db.insert(slideAnnotations).values(annotation);
    const inserted = await db
      .select()
      .from(slideAnnotations)
      .where(
        and(
          eq(slideAnnotations.slideId, annotation.slideId),
          eq(slideAnnotations.userId, annotation.userId)
        )
      )
      .limit(1);
    return inserted[0];
  }
}

export async function getAnnotationsByUser(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(slideAnnotations)
    .where(eq(slideAnnotations.userId, userId))
    .orderBy(desc(slideAnnotations.updatedAt));
}

export async function getAnnotationBySlideAndUser(slideId: string, userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(slideAnnotations)
    .where(and(eq(slideAnnotations.slideId, slideId), eq(slideAnnotations.userId, userId)))
    .limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getBookmarkedSlides(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(slideAnnotations)
    .where(and(eq(slideAnnotations.userId, userId), eq(slideAnnotations.bookmarked, true)))
    .orderBy(desc(slideAnnotations.updatedAt));
}
