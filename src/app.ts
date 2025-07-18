import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import globalErrorHandler from "./app/middlwares/globalErrorhandler";
import router from "./app/routes";
const app: Application = express();

app.use(
  cors({
    origin: ["https://sumon-ray.vercel.app", "https://admin-dashboard-six-gold-80.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/api", router);

app.use(globalErrorHandler);


// order
app.use(globalErrorHandler);
const getAController = (req: Request, res: Response) => {
  res.send("hello world");
};
app.get("/", getAController);

export default app;
