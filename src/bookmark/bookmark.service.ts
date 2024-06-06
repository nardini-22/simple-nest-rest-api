import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from '../db/schema';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(
    @Inject('dev-db') private db: PostgresJsDatabase<typeof schema>,
  ) {}
  getBookmarks(userId: number) {
    return this.db.query.bookmark.findMany({
      where: eq(schema.bookmark.userId, userId),
    });
  }

  getBookmarkById(userId: number, bookmarkId: number) {
    return this.db.query.bookmark.findFirst({
      where: and(
        eq(schema.bookmark.id, bookmarkId),
        eq(schema.bookmark.userId, userId),
      ),
    });
  }

  async createBookmark(userId: number, dto: CreateBookmarkDto) {
    const [bookmark] = await this.db
      .insert(schema.bookmark)
      .values({ userId, ...dto })
      .returning();

    return bookmark;
  }

  async editBookmarkById(
    userId: number,
    bookmarkId: number,
    dto: EditBookmarkDto,
  ) {
    const bookmark = await this.db.query.bookmark.findFirst({
      where: eq(schema.bookmark.id, bookmarkId),
    });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException('Acesso negado');
    }

    const [editedBookmark] = await this.db
      .update(schema.bookmark)
      .set({ ...dto })
      .where(eq(schema.bookmark.id, userId))
      .returning();

    return editedBookmark;
  }

  async deleteBookmarkById(userId: number, bookmarkId: number) {
    const bookmark = await this.db.query.bookmark.findFirst({
      where: eq(schema.bookmark.id, bookmarkId),
    });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException('Acesso negado');
    }

    await this.db
      .delete(schema.bookmark)
      .where(eq(schema.bookmark.id, bookmarkId));
  }
}
