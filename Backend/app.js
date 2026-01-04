import express from "express";
import cors from "cors";
import nameRoutes from "./routes/nameRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/name", nameRoutes);

export default app;
