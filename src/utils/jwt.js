const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, secretKey, configJWT);

  return token;
};

const validateToken = (token) => {
  const isValid = jwt.verify(token, secretKey);

  return isValid;
};

module.exports = {
  createToken,
  validateToken,
};