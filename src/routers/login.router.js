const express = require('express');

const LoginController = require('../controllers/login.controller');
const validateLogin = require('../middlewares/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, LoginController.login);

module.exports = loginRouter;