const { addNewProduct, fetchSingleProduct, fetchProductRatings, fetchAllProductsAvailable, updateExistingProduct } = require('./product');
const { addNewUser, loginUser } = require('./user');
const { addNewRating } = require('./rating');

module.exports = { addNewProduct, fetchProductRatings, addNewRating, fetchSingleProduct, fetchAllProductsAvailable, updateExistingProduct,  addNewUser, loginUser };
