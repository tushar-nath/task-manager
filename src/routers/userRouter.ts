import express, { Request, Response } from "express";
import { Accounts } from "../handlers/userHandler";
import { createTask } from "../handlers/taskHandler";

const router = express.Router();

// Health check route
router.get("/healthcheck", (req: Request, res: Response) => {
  res.send({ success: true });
});

// User routes
router.post("/signup", Accounts.signup);
router.post("/login", Accounts.login);

// Task routes
router.post("/tasks", createTask);

export default router;
