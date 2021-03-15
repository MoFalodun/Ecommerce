const {
  addProduct,
  fetchSingleProduct,
  fetchAllProducts,
  updateProduct,
  fetchProductWithRatings,
  fetchAvgProductRating
} = require("./product");

const {
  addUser,
  getUserByUsername,
  getUserById,
  getUserByEmail,
  updateUserDetails,
} = require("./user");

const { addRating, fetchAllRatings, fetchAverageRatings, fetchProductRatings } = require("./rating");

module.exports = {
  addProduct,
  fetchSingleProduct,
  fetchAllProducts,
  updateProduct,
  addUser,
  getUserByUsername,
  getUserById,
  getUserByEmail,
  updateUserDetails,
  addRating,
  fetchAllRatings,
  fetchAverageRatings,
  fetchProductRatings,
  fetchProductWithRatings,
  fetchAvgProductRating,
};
