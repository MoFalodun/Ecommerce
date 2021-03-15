const { Router } = require('express');
const { addNewRating} = require('../controllers');

const { checkIfProductExists, checkOwnerForRatings, validateRating, authenticate, checkIfPrevRated} = require('../middlewares');

const ratingRouter = Router();

ratingRouter.post('/rating/:productId', authenticate, checkIfProductExists, checkOwnerForRatings, validateRating, checkIfPrevRated, addNewRating);

module.exports = { ratingRouter, };