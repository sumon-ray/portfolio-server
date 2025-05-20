import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middlwares/globalErrorhandler";
import router from "./app/routes";
const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:4000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));



app.use("/api", router);

app.use(globalErrorHandler);


// order
app.use(globalErrorHandler);
const getAController = (req: Request, res: Response) => {
  res.send("hello world");
};
app.get("/", getAController);

export default app;
