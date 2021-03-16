const {
  addNewProduct,
  fetchSingleProductbyID,
  fetchAllProductsAvailable,
  updateExistingProduct,
  fetchProductAvgRatings,
  fetchProductRatings,
  updateProductWithRatings,
  deleteSingleProductbyID,
} = require("./product");

const { addNewUser, loginUser } = require("./user");

const { addNewRating } = require("./rating");

module.exports = {
  addNewProduct,
  fetchSingleProductbyID,
  fetchAllProductsAvailable,
  updateExistingProduct,
  addNewUser,
  loginUser,
  addNewRating,
  fetchProductAvgRatings,
  fetchProductRatings,
  updateProductWithRatings,
  deleteSingleProductbyID,
};
