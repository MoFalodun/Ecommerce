const Joi = require('joi');

const productSchema = Joi.object({
  title: Joi.string().min(3).max(70).required(),
  description: Joi.string().min(10).max(200).required(),
  price: Joi.number().integer().positive().required(),
  size: Joi.number().integer().positive().required(),
  color: Joi.string().min(3).max(40).required(),
});

module.exports = productSchema;
