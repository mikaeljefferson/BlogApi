const { Router } = require('express');
const { validateCategory } = require('../middlewares/validateCategory');
const { TokenValidation } = require('../middlewares/auth');

const categoryController = require('../controllers/Category.controller');

const categoryRouter = Router();

categoryRouter.post('/', TokenValidation, validateCategory, categoryController.createCategory);

categoryRouter.get('/', TokenValidation, categoryController.findAll);

module.exports = categoryRouter;