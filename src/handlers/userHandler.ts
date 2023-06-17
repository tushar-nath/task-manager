import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class Accounts {
  static async signup(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const existingUser = await UserService.getUserByUsername(username);
      if (existingUser) {
        return res.status(409).json({ error: "Username already exists" });
      }

      const user = await UserService.registerUser(username, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to register user" });
    }
  }

  static async login(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const user = await UserService.authenticateUser(username, password);
      res.status(200).json(user);
    } catch (error) {
      res.status(401).json({ error: "Invalid credentials" });
    }
  }
}
