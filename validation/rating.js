const Joi = require('joi');

const ratingSchema = Joi.object({
    rating: Joi.number().integer().less(6).positive().required(),
  });

module.exports = { ratingSchema };