const LoginService = require('../services/login.service');

const LoginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const token = await LoginService({ email, password });

    return res.status(200).json({ token });
  },
};

module.exports = LoginController;