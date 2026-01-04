import express from "express";
import { saveName, getName } from "../controllers/nameController.js";

const router = express.Router();

router.post("/", saveName);
router.get("/", getName);

export default router;
