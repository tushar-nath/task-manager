import Task, { TaskAttributes } from '../models/Task';

export class TaskService {
  static async createTask(title: string, description: string, userId: number) {
    try {
      const taskAttributes: TaskAttributes = {
        title,
        description,
        userId,
      };

      const task = await Task.create(taskAttributes);
      return task.toJSON();
    } catch (error) {
      throw new Error('Failed to create task');
    }
  }
}
