import express from "express";
import cors from "cors";
import userRouter from "./routers/userRouter";

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());
app.use("/api/v1", userRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
