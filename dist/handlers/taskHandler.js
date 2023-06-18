"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const taskService_1 = require("../services/taskService");
class Tasks {
    static createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, userId } = req.body;
            try {
                const task = yield taskService_1.TaskService.createTask(title, description, userId);
                res.status(201).json(task);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to create task" });
            }
        });
    }
    static getTasksByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = parseInt(req.query.userId, 10);
            try {
                const tasks = yield taskService_1.TaskService.getTasksByUser(userId);
                res.status(200).json(tasks);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to get tasks for user" });
            }
        });
    }
    static deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the task ID from the URL parameter
            const taskId = parseInt(req.params.taskId, 10);
            try {
                yield taskService_1.TaskService.deleteTask(taskId);
                res.status(200).json({ message: "Task successfully deleted" });
            }
            catch (error) {
                res.status(500).json({ error: "Failed to delete task" });
            }
        });
    }
}
exports.Tasks = Tasks;
