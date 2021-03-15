const db = require('../db/setup');
const { insertProduct, fetchProductById, fetchProducts, updateProductById } = require('../db/queries/product');
const { generateUUID } = require('../utils');
const { fetchProductRatings} = require('./rating');
const rating = require('../db/queries/rating');


const addProduct = async (data) => {
    const id = generateUUID;
    const { title, description, userId, price, size, color} = data;
    return db.one(insertProduct, [id, title, description, userId, price, size, color]);
};

const fetchSingleProduct = async (productId) => db.oneOrNone(fetchProductById, [productId])

const fetchProductWithRatings = async (productId) => {
    let averageRating = 0;
    const ratings = await fetchProductRatings(productId)
    const product = await fetchSingleProduct(productId)
    for (let i = 0; i < ratings.length; i++) {
        averageRating += ratings[i];
    }
    averageRating = averageRating / ratings.length
    product.averageRating = averageRating;
    return product;
}

const fetchAllProducts = async () => db.manyOrNone(fetchProducts);

const updateProduct = async (data, productId) => {
    const {description, price, size, color } = data;
    return db.one(updateProductById, [description, price, size, color, productId])
};

module.exports = {
    addProduct,
    fetchSingleProduct,
    fetchAllProducts,
    updateProduct,
    fetchProductWithRatings,
  };
  