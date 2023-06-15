/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      
      underscored: true,
      tableName: 'users',
      timestamps: false,
    });
    User.associate = (models) => {
      User.hasMany(
models.BlogPost,
        {
          foreignKey: 'user_id',
          as: 'blog_posts',
        },
      );
    };
    return User;
  };