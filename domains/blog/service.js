import blogModel from "../blog/model.js";

class BlogService {
  async createBlog(data) {
    const Blog = new blogModel(data);
    return await Blog.save(data);
  }

  async getAllBlogs() {
    return await blogModel.find();
  }

  async getBlogById(id) {
    return await blogModel.findById(id);
  }

  async updateBlog(id, data) {
    return await blogModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteBlog(id) {
    return await blogModel.findByIdAndDelete(id);
  }
}

export default BlogService;
