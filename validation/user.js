const Joi = require('joi');

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  firstName: Joi.string().min(3).max(100).required(),
  lastName: Joi.string().min(3).max(100).required(),
  password: Joi.string().min(7).required(),
  userName : Joi.string().min(4).max(20).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});

module.exports = {
  signupSchema,
  loginSchema,
};