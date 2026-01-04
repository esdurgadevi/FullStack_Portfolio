import Image from "../models/Image.js";

export const uploadImage = async (req, res) => {
  try {
    const imageUrl = `/uploads/images/${req.file.filename}`;
    const { description } = req.body;

    const image = new Image({ imageUrl, description });
    await image.save();

    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
