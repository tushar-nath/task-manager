"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userHandler_1 = require("../handlers/userHandler");
const taskHandler_1 = require("../handlers/taskHandler");
const router = express_1.default.Router();
// Health check route
router.get("/healthcheck", (req, res) => {
    res.send({ success: true });
});
// User routes
router.post("/user/signup", userHandler_1.Accounts.signup);
router.post("/user/login", userHandler_1.Accounts.login);
// Task routes
router.post("/tasks", taskHandler_1.Tasks.createTask);
router.get("/tasks", taskHandler_1.Tasks.getTasksByUser);
router.delete('/tasks/:taskId', taskHandler_1.Tasks.deleteTask);
exports.default = router;
