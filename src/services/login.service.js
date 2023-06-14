const { User } = require('../models');
const schema = require('./validations/validations');
const { createToken } = require('../utils/jwt');

const findByEmail = async (email, password) => {
  const error = schema.validateEmail(email);
  if (error.type) return error;

  const userInfo = await User.findOne({ where: { email } });
  if (!userInfo || userInfo.dataValues.password !== password) { 
    return { type: 'BAD_REQUEST', message: 'Invalid fields' }; 
  }

  const token = createToken({ name: userInfo.dataValues.displayName });

  return { type: null, message: { token } };
};

module.exports = {
  findByEmail,
};