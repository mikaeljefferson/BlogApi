const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'abcde';

const jwtConfig = {
  expiresIn: '10m',
};

const createToken = (payload) => jwt.sign(payload, TOKEN_SECRET, jwtConfig);

const decodeToken = (token) => jwt.verify(token, TOKEN_SECRET);

module.exports = {
  createToken,
  decodeToken,
};