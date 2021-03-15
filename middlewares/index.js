const { validateProduct, checkIfProductExists, checkOwner, validateUpdateProduct, checkOwnerForRatings } = require("./product");
const { authenticate } = require("./auth");
const { validateSignup, validateLogin, checkIfUserExists, } = require("./user");
const { validateRating } = require('./rating')
module.exports = {
  validateProduct,
  checkIfProductExists,
  authenticate,
  validateSignup,
  validateLogin,
  checkIfUserExists,
  checkOwner,
  validateUpdateProduct,
  checkOwnerForRatings,
  validateRating,
};
