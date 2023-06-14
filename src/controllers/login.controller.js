const { loginService } = require('../services');
const errorMap = require('../utils/errorMap');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.findByEmail(email, password);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  login,
};