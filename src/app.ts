import express from "express";
import userRouter from "./routers/userRouter";

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
