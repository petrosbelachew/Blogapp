// routes/itemRoutes.js
import express from "express";
import Item from "../Item.js";
import "../..//server.js";

const router = express.Router();

// 1. CREATE an Item (POST request)
router.post("/", async (req, res) => {
  try {
    console.log("Received Body:", req.body);
    // FIX: Use Item.create() and pass the entire req.body
    const newItem = await Item.create(req.body);

    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read one Item
router.get("/:id", async (req, res) => {
  try {
    // 1. Get the ID from the URL parameters
    const itemId = req.params.id;

    // 2. Query the database for the specific item
    const item = await Item.findById(itemId);

    // Handle case where no item is found
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // 3. Return the single item
    res.json(item);
  } catch (err) {
    // Handle errors like invalid ID format
    res.status(500).json({ message: err.message });
  }
});

// 2. READ all Items (GET request)
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. UPDATE an Item (PUT request) - Example for a single item by ID
// You would typically use middleware to find the item first, but keeping it simple:
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4. DELETE an Item (DELETE request)
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
