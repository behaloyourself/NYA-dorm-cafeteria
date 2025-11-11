import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const feedback = pgTable("feedback", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

export const insertFeedbackSchema = createInsertSchema(feedback).omit({
  id: true,
  submittedAt: true,
});

export type InsertFeedback = z.infer<typeof insertFeedbackSchema>;
export type Feedback = typeof feedback.$inferSelect;

export const dessertVotes = pgTable("dessert_votes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  dessertChoice: text("dessert_choice").notNull(),
  votedAt: timestamp("voted_at").defaultNow().notNull(),
});

export const insertDessertVoteSchema = createInsertSchema(dessertVotes).omit({
  id: true,
  votedAt: true,
});

export type InsertDessertVote = z.infer<typeof insertDessertVoteSchema>;
export type DessertVote = typeof dessertVotes.$inferSelect;
