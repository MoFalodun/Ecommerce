const db = require('../db/setup');
const { insertRating, fetchRatingsByProductId } = require('../db/queries/rating');
const { generateUUID } = require('../utils');

const addRating = async (data, productId) => {
    const id = generateUUID;
    const { rating, userId } = data;
    return db.one(insertRating, [id, rating, userId, productId]);
};

const fetchProductRatings = async (productId) => db.manyOrNone(fetchRatingsByProductId, [productId])

module.exports = {
    addRating,
    fetchProductRatings,
  };
  