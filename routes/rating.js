const { Router } = require('express');
const { addNewRating } = require('../controllers');
const { checkIfProductExists } = require('../middlewares');

const ratingRouter = Router();

ratingRouter.post('/rating/:productId', checkIfProductExists, addNewRating);

module.exports = { ratingRouter };
