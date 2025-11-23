import WriterService from "./service.js";

const writerService = new WriterService();
class writerController {
  async create(req, res) {
    try {
      const writer = await writerService.createWriter(req.body);
      return res.status(201).json(writer);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const writers = await writerService.getAllWriters();
      return res.status(200).json(writers);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const writer = await writerService.getWriterById(req.params.body);
      return res.status(200).json(writer);
    } catch (error) {
      return res.status(404).json({ error: "writer not found" });
    }
  }

  async update(req, res) {
    try {
      const writer = await writerService.updateWriter(req.params.id, req.body);
      return res.status(200).json(writer);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await writerService.deleteWriter(req.params.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ error: "Blog not found" });
    }
  }
}

export default writerController;
