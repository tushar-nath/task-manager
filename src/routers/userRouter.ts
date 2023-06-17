import express, { Request, Response, Router } from "express";
import { registerUser } from "../handlers/userHandlers";

const router = express.Router();

router.get("/healthcheck", (req: Request, res: Response) => {
  res.send({ success: true });
});

router.post("/register", registerUser);

export default router;
