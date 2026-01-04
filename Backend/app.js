import express from "express";
import cors from "cors";
import nameRoutes from "./routes/nameRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/name", nameRoutes);
app.use("/api/images", imageRoutes);

export default app;
