const Joi = require('joi');

const ratingSchema = Joi.object({
    rating: Joi.number().integer().positive().required(),
  });

module.exports = { ratingSchema };