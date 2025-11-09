import { type User, type InsertUser, type Feedback, type InsertFeedback, type DessertVote, type InsertDessertVote } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createFeedback(feedback: InsertFeedback): Promise<Feedback>;
  getAllFeedback(): Promise<Feedback[]>;
  createDessertVote(vote: InsertDessertVote): Promise<DessertVote>;
  getDessertVoteCounts(): Promise<{ dessert: string; count: number }[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private feedbacks: Map<string, Feedback>;
  private dessertVotes: Map<string, DessertVote>;

  constructor() {
    this.users = new Map();
    this.feedbacks = new Map();
    this.dessertVotes = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createFeedback(insertFeedback: InsertFeedback): Promise<Feedback> {
    const id = randomUUID();
    const feedback: Feedback = {
      ...insertFeedback,
      id,
      submittedAt: new Date(),
    };
    this.feedbacks.set(id, feedback);
    return feedback;
  }

  async getAllFeedback(): Promise<Feedback[]> {
    return Array.from(this.feedbacks.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }

  async createDessertVote(insertVote: InsertDessertVote): Promise<DessertVote> {
    const id = randomUUID();
    const vote: DessertVote = {
      ...insertVote,
      id,
      votedAt: new Date(),
    };
    this.dessertVotes.set(id, vote);
    return vote;
  }

  async getDessertVoteCounts(): Promise<{ dessert: string; count: number }[]> {
    const votes = Array.from(this.dessertVotes.values());
    const counts = new Map<string, number>();
    
    votes.forEach(vote => {
      counts.set(vote.dessertChoice, (counts.get(vote.dessertChoice) || 0) + 1);
    });

    return Array.from(counts.entries())
      .map(([dessert, count]) => ({ dessert, count }))
      .sort((a, b) => b.count - a.count);
  }
}

export const storage = new MemStorage();
