import express, { Request, Response, Router } from "express";
import { Accounts } from "../handlers/userHandler";

const router = express.Router();

router.get("/healthcheck", (req: Request, res: Response) => {
  res.send({ success: true });
});

router.post("/signup", Accounts.signup);

export default router;
