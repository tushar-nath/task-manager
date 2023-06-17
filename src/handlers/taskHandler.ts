import { Request, Response } from 'express';
import { TaskService } from '../services/taskService';

export const createTask = async (req: Request, res: Response) => {
  const { title, description, userId } = req.body;
  try {
    const task = await TaskService.createTask(title, description, userId);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};
