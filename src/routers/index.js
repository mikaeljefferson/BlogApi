const { Router } = require('express');

const loginRouter = require('./login.router');
const userRouter = require('./user.router');

const appRoutes = Router();

appRoutes.use('/login', loginRouter);
appRoutes.use('/user', userRouter);

module.exports = appRoutes;