const { BlogPost, User, Category } = require('../models');

const PostService = {

  findAll: async () => {
    const posts = BlogPost.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'displayName', 'email', 'image'],
        },
        { model: Category, as: 'categories' },
      ],
    });

    return posts;
  },
};

module.exports = PostService;