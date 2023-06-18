import { Request, Response } from "express";
import { TaskService } from "../services/taskService";

export class Tasks {
  static async createTask(req: Request, res: Response) {
    const { title, description, userId } = req.body;
    try {
      const task = await TaskService.createTask(title, description, userId);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: "Failed to create task" });
    }
  }
  static async getTasksByUser(req: Request, res: Response) {
    const userId = parseInt(req.query.userId as string, 10);
    try {
      const tasks = await TaskService.getTasksByUser(userId);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Failed to get tasks for user" });
    }
  }
  static async deleteTask(req: Request, res: Response) {
    // Get the task ID from the URL parameter
    const taskId = parseInt(req.params.taskId as string, 10);
    try {
      await TaskService.deleteTask(taskId);
      res.status(200).json({ message: "Task successfully deleted" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete task" });
    }
  }
}
