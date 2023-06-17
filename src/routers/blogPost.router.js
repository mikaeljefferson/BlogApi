const express = require('express');

const PostController = require('../controllers/blogPost.controller');
const { TokenValidation } = require('../middlewares/auth');

const postRouter = express.Router();

postRouter.get('/', TokenValidation, PostController.findAll);

module.exports = postRouter;