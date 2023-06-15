const loginService = require('../services/login.service');

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const token = await loginService({ email, password });

    return res.status(200).json({ token });
  },
};

module.exports = loginController;