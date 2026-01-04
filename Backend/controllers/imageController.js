import Image from "../models/Image.js";

// Function to convert Drive link to direct URL
function getDirectDriveLink(link) {
  const match = link.match(/\/d\/(.*?)\/view/);
  if (match) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return null;
}

// Upload image info (Google Drive link + description)
export const uploadImageLink = async (req, res) => {
  try {
    const { driveLink, description } = req.body;

    if (!driveLink || !description) {
      return res.status(400).json({ message: "Both driveLink and description are required" });
    }

    // Convert to direct link
    const directUrl = getDirectDriveLink(driveLink);
    if (!directUrl) {
      return res.status(400).json({ message: "Invalid Google Drive link format" });
    }

    const image = new Image({
      imageUrl: directUrl,
      description
    });

    await image.save();
    res.status(201).json({ message: "Image saved successfully", image });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all stored images
export const getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
