const { Router } = require('express');
const { addNewProduct, fetchSingleProduct, fetchAllProductsAvailable, fetchProductRatings } = require('../controllers');
const { validateProduct, checkIfProductExists } = require('../middlewares');

const productRouter = Router();

productRouter.post('/product', validateProduct, addNewProduct);
productRouter.get('/product/:productId',checkIfProductExists, fetchSingleProduct);
productRouter.get('/products', fetchAllProductsAvailable)
productRouter.get('/products-ratings/:productId', fetchProductRatings )

module.exports = { productRouter };