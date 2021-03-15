const { validateProduct, checkIfProductExists } = require("./product");
const { authenticate } = require("./auth");
const { validateSignup, validateLogin, checkIfUserExists } = require("./user");
module.exports = {
  validateProduct,
  checkIfProductExists,
  authenticate,
  validateSignup,
  validateLogin,
  checkIfUserExists,
};
