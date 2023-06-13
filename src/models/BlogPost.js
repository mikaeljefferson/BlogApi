/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
'BlogPost',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        foreignKey: true,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
        
      },
      {
        timestamps: true,
        createdAt: 'published',
        underscored: true,
        updatedAt: 'updated',

        tableName: 'blog_posts',
      },
    );
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(
models.User,
        {
          foreignKey: 'id',
          as: 'user',
        },
      );
    };
  
    return BlogPost;
  };