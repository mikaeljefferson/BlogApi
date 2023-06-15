const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const UserService = {
  create: async ({ displayName, email, password, image }) => {
    const createUser = await User.create({
      displayName,
      email,
      password,
      image,
    });
    const token = createToken({ email: createUser.email });

    return token;
  },

  findAll: async () => {
    const users = User.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  },

  findById: async (id) => {
    const user = User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
    return user;
  },
};

module.exports = UserService;