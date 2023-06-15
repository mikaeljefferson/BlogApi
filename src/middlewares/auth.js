const { decodeToken } = require('../utils/jwt');

const TokenValidation = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = decodeToken(token);
    res.locals.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  TokenValidation,
};