import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const user = pgTable('users', {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  email: text('email').notNull().unique(),
  hash: text('hash').notNull(),
  firstName: text('first_name'),
  lastName: text('last_name'),
});

export const userRelations = relations(user, ({ many }) => ({
  bookmark: many(bookmark),
}));

export const selectUserSchema = createSelectSchema(user);

export type UserType = z.infer<typeof selectUserSchema>;

export const bookmark = pgTable('bookmarks', {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  title: text('title').notNull(),
  description: text('description'),
  link: text('link').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
});

export const bookmarkRelations = relations(bookmark, ({ one }) => ({
  user: one(user, {
    fields: [bookmark.userId],
    references: [user.id],
  }),
}));
