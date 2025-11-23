import express from "express";

const router = express.Router();
import writerController from "../domains/writer/controller.js";
const WriterController = new writerController();

router.post("/", WriterController.create);

router.get("/", WriterController.findAll);
router.get("/:id", WriterController.findById);
router.put("/:id", WriterController.update);
router.delete("/:id", WriterController.delete);

export default router;
