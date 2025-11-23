import writerModel from "./model.js";

class WriterService {
  async createWriter(data) {
    const Writer = new writerModel(data);
    return await Writer.save(data);
  }

  async getAllWriters() {
    return await writerModel.find();
  }

  async getWriterById(id) {
    return await writerModel.findById(id);
  }

  async updateWriter(id, data) {
    return await writerModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteWriter(id) {
    return await writerModel.findByIdAndDelete(id);
  }
}

export default WriterService;
