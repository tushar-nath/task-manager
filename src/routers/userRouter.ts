import express, { Request, Response } from "express";
import { Accounts } from "../handlers/userHandler";

const router = express.Router();

router.get("/healthcheck", (req: Request, res: Response) => {
  res.send({ success: true });
});
router.post("/signup", Accounts.signup);
router.post("/login", Accounts.login);

export default router;
