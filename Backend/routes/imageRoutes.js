import express from "express";
import { uploadImageLink, getImages } from "../controllers/imageController.js";

const router = express.Router();

router.post("/upload-link", uploadImageLink);

// GET: Fetch all images
router.get("/", getImages);

export default router;
