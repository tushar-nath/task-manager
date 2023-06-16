import express, { Request, Response, Router } from "express";

const router = express.Router();

router.get("/healthcheck", (req: Request, res: Response) => {
  res.send({ success: true });
});

export default router;
