const { Router } = require('express');
const { addNewRating} = require('../controllers');

const { checkIfProductExists, checkOwnerForRatings, validateRating, authenticate} = require('../middlewares');

const ratingRouter = Router();

ratingRouter.post('/rating/:productId', authenticate, checkIfProductExists, checkOwnerForRatings, validateRating, addNewRating);

module.exports = { ratingRouter, };