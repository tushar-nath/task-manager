"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./routers/userRouter"));
const app = (0, express_1.default)();
// Enable CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1", userRouter_1.default);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
