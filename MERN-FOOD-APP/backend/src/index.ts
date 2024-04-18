import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";

const uri =
  "mongodb+srv://admin:uLN6qGghB6zkRtLG@cluster0.gl8dxt6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING || (uri as string))
  .then(() => console.log("connected to a database!"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
  console.log("Server is running in http://localhost:7000");
});
