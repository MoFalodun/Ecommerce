const { Router } = require('express');
const { addNewProduct, fetchAllProductsAvailable, updateExistingProduct, fetchProductAvgRatings, fetchProductRatings, } = require('../controllers');
const { validateProduct, checkIfProductExists, authenticate, checkOwner, validateUpdateProduct } = require('../middlewares');

const productRouter = Router();

productRouter.post('/product', authenticate, validateProduct, addNewProduct);
productRouter.get('/product/:productId',checkIfProductExists, fetchProductRatings);
productRouter.get('/products', fetchAllProductsAvailable)
productRouter.put('/product/:productId', authenticate, checkOwner, validateUpdateProduct, updateExistingProduct);
productRouter.get('/products-ratings/:productId', fetchProductRatings )
productRouter.get('/productratings/:productId', fetchProductAvgRatings )
module.exports = { productRouter, };