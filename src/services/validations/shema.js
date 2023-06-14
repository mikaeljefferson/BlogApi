const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const emailSchema = Joi.string().email().required();

module.exports = {
  emailSchema,
  idSchema,

};