/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPostsTable = await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      published: {
        type: Sequelize.DATE,
      },
      updated: {
        type: Sequelize.DATE,
      },
    });

    return BlogPostsTable;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('blog_posts'),
};