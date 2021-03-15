const {
  addProduct,
  fetchSingleProduct,
  fetchAllProducts,
  updateProduct,
} = require("./product");

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
};
