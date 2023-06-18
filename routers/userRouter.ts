import express, { Request, Response } from "express";
import { Accounts } from "../handlers/userHandler";
import { Tasks } from "../handlers/taskHandler";

const router = express.Router();

// Health check route
router.get("/healthcheck", (req: Request, res: Response) => {
  res.send({ success: true });
});

// User routes
router.post("/user/signup", Accounts.signup);
router.post("/user/login", Accounts.login);

// Task routes
router.post("/tasks", Tasks.createTask);
router.get("/tasks", Tasks.getTasksByUser);
router.delete('/tasks/:taskId', Tasks.deleteTask);

export default router;
