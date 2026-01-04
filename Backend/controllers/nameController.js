import Name from "../models/Name.js";

// create or update name (only one record)
export const saveName = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const existing = await Name.findOne();

    if (existing) {
      existing.name = name;
      await existing.save();
      return res.status(200).json(existing);
    }

    const newName = await Name.create({ name });
    res.status(201).json(newName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get name
export const getName = async (req, res) => {
  try {
    const name = await Name.findOne();
    res.status(200).json(name);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
