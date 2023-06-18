import Task, { TaskAttributes } from "../models/task";

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
      throw new Error("Failed to create task");
    }
  }
  static async getTasksByUser(userId: number) {
    try {
      const tasks = await Task.findAll({ where: { userId } });
      return tasks.map((task) => task.toJSON());
    } catch (error) {
      throw new Error("Failed to get tasks by user");
    }
  }
  static async deleteTask(taskId: number) {
    try {
      const task = await Task.findByPk(taskId);
      if (!task) {
        throw new Error("Task not found");
      }
      await task.destroy();
    } catch (error) {
      throw new Error("Failed to delete task");
    }
  }
}
