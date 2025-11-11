import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFeedbackSchema, insertDessertVoteSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/feedback", async (req, res) => {
    try {
      const validatedData = insertFeedbackSchema.parse(req.body);
      const feedback = await storage.createFeedback(validatedData);
      res.json(feedback);
    } catch (error) {
      res.status(400).json({ error: "Invalid feedback data" });
    }
  });

  app.get("/api/feedback", async (req, res) => {
    try {
      const feedbacks = await storage.getAllFeedback();
      res.json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve feedback" });
    }
  });

  app.post("/api/dessert-vote", async (req, res) => {
    try {
      const validatedData = insertDessertVoteSchema.parse(req.body);
      const vote = await storage.createDessertVote(validatedData);
      res.json(vote);
    } catch (error) {
      res.status(400).json({ error: "Invalid vote data" });
    }
  });

  app.get("/api/dessert-votes", async (req, res) => {
    try {
      const voteCounts = await storage.getDessertVoteCounts();
      res.json(voteCounts);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve vote counts" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
