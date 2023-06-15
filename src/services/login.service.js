const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const loginService = async ({ email, _password }) => {
  const user = await User.findOne({ where: { email } });

   const payload = {
     id: user.id,
   };
   const token = createToken(payload);

   return token;
};

module.exports = loginService;