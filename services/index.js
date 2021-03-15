const {
  addProduct,
  fetchSingleProduct,
  fetchAllProducts,
  updateProduct,
  fetchProductWithRatings,
} = require("./product");

const {
  addRating,
  fetchProductRatings,
} = require("./rating");

const { addUser, getUserByUsername, getUserById, getUserByEmail, updateUserDetails, } = require("./user");

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
  fetchProductRatings,
  fetchProductWithRatings,
};
