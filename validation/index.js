const { productSchema, updateProductSchema} = require('./product');
const { signupSchema, loginSchema } = require('./user');
const { ratingSchema } = require('./rating');

module.exports = { productSchema, signupSchema, loginSchema, updateProductSchema, ratingSchema };
