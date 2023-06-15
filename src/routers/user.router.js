const express = require('express');

const UserController = require('../controllers/user.controller');
const UserValidation = require('../middlewares/userValidation');
const { TokenValidation } = require('../middlewares/auth');

const userRouter = express.Router();

userRouter.post('/', UserValidation, UserController.createUser);
userRouter.get('/', TokenValidation, UserController.findAll);
userRouter.get('/:id', TokenValidation, UserController.findById);

module.exports = userRouter;