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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const task_1 = __importDefault(require("../models/task"));
class TaskService {
    static createTask(title, description, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskAttributes = {
                    title,
                    description,
                    userId,
                };
                const task = yield task_1.default.create(taskAttributes);
                return task.toJSON();
            }
            catch (error) {
                throw new Error("Failed to create task");
            }
        });
    }
    static getTasksByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield task_1.default.findAll({ where: { userId } });
                return tasks.map((task) => task.toJSON());
            }
            catch (error) {
                throw new Error("Failed to get tasks by user");
            }
        });
    }
    static deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const task = yield task_1.default.findByPk(taskId);
                if (!task) {
                    throw new Error("Task not found");
                }
                yield task.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete task");
            }
        });
    }
}
exports.TaskService = TaskService;
