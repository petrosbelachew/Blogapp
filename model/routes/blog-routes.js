import express from "express";

const router = express.Router();
import blogController from "../../domains/blog/controller.js";
const BlogController = new blogController();

router.post("/", BlogController.create);

router.get("/", BlogController.findAll);
router.get("/:id", BlogController.findById);
router.put("/:id", BlogController.update);
router.delete("/:id", BlogController.delete);

export default router;
