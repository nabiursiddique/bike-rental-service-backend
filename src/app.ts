import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
export const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Bike rental app is running......");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  });
  next();
});
