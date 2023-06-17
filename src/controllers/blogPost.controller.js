const PostService = require('../services/blogPost.service');

const PostController = {

  findAll: async (_req, res) => {
    const posts = await PostService.findAll();
    return res.status(200).json(posts);
  },
};

module.exports = PostController;