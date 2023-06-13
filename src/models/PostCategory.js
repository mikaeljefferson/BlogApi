/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: {
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        categoryId: DataTypes.INTEGER,
          foreignKey: true,
        
      },
      {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
      },
);
  
    PostCategory.associate = ({ BlogPost, Category }) => {
      BlogPost.belongsToMany(Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  
      Category.belongsToMany(BlogPost, {
        as: 'blog_posts',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    };
  
    return PostCategory;
  };