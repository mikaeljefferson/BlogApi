const UserService = require('../services/user.service');

const UserController = {
  createUser: async (req, res) => {
    const token = await UserService.create(req.body);
    return res.status(201).json({ token });
  },

  findAll: async (_req, res) => {
    const users = await UserService.findAll();
    return res.status(200).json(users);
  },

  findById: async (req, res) => {
    const { id } = req.params;

    const user = await UserService.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    } 

    return res.status(200).json(user);
  },

};

module.exports = UserController;
