const { User } = require('../models');

const LoginValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const validUser = await User.findOne({ where: { email } });

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  if (!validUser) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  next();
};

module.exports = LoginValidation;