const db = require('../db/setup');
const { generateUUID } = require('../utils');
const { insertRatings, fetchRatings, fetchAvgRating, fetchRatingsByProduct, fetchUserRatings } = require('../db/queries/rating');

const addRating = async (data) => {
    const { rating, productId, userId } = data;
    const id = generateUUID;
    return db.one(insertRatings, [id, rating , userId, productId]);
};

const fetchAllRatings = async () => db.manyOrNone(fetchRatings);

const fetchProductRatings = async (productId) => db.manyOrNone(fetchRatingsByProduct, [productId])

const fetchAverageRatings = async (productId) => db.manyOrNone(fetchAvgRating, [productId])

const fetchRatingsByUser = async (userId, productId) => db.manyOrNone(fetchUserRatings, [userId, productId])

module.exports = {
    addRating,
    fetchAllRatings,
    fetchAverageRatings,
    fetchProductRatings,
    fetchRatingsByUser,
  };
  