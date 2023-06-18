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
exports.Accounts = void 0;
const userService_1 = require("../services/userService");
class Accounts {
    static signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            try {
                const existingUser = yield userService_1.UserService.getUserByUsername(username);
                if (existingUser) {
                    return res.status(409).json({ error: "Username already exists" });
                }
                const user = yield userService_1.UserService.registerUser(username, password);
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to register user" });
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            try {
                const user = yield userService_1.UserService.authenticateUser(username, password);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(401).json({ error: "Invalid credentials" });
            }
        });
    }
}
exports.Accounts = Accounts;
