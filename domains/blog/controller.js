import BlogService from "../blog/service.js";

const blogService = new BlogService();
class BlogController {
  async create(req, res) {
    try {
      const blog = await blogService.createBlog(req.body);
      return res.status(201).json(blog);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const blogs = await blogService.getAllBlogs();
      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const blog = await blogService.getBlogById(req.params.id);
      return res.status(200).json(blog);
    } catch (error) {
      return res.status(404).json({ error: "Blog not found" });
    }
  }

  async update(req, res) {
    try {
      const blog = await blogService.updateBlog(req.params.id, req.body);
      return res.status(200).json(blog);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await blogService.deleteBlog(req.params.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ error: "Blog not found" });
    }
  }
}

export default BlogController;
