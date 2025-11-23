import blogModel from "./blog.model.js";

class BlogService {
  // Helper function to define the population query once
  static getPopulateQuery() {
    return {
      path: "writer", // The field in the Blog model to populate
      select: "name email -_id", // Fields to include from the Writer model, excluding the _id from the writer object
    };
  }

  async createBlog(data) {
    const Blog = new blogModel(data);
    return await Blog.save(data);
  }

  async getAllBlogs() {
    return await blogModel.find().populate(BlogService.getPopulateQuery());
  }

  async getBlogById(id) {
    return await blogModel
      .findById(id)
      .populate(BlogService.getPopulateQuery());
  }

  async updateBlog(id, data) {
    return await blogModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteBlog(id) {
    return await blogModel.findByIdAndDelete(id);
  }
}

export default BlogService;
