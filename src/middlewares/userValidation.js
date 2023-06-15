const { User } = require('../models');

const regexEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

const UserValidation = async (req, res, next) => {
  const existentUser = await User.findOne({ where: { email: req.body.email } });
  if (req.body.displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (!regexEmail.test(req.body.email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (req.body.password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  if (existentUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = UserValidation;