const db = require('../db/setup');
const { insertProduct, fetchProductById, fetchProducts, updateProductById, deleteProductByID } = require('../db/queries/product');
const { fetchAvgRating } = require('../db/queries/rating')
const { fetchProductRatings} = require('./rating');
const { generateUUID } = require('../utils');

const addProduct = async (data) => {
    const id = generateUUID;
    const { title, description, price, size, color, userId, userName } = data;
    return db.one(insertProduct, [id, title, description, price, size, color, userId, userName]);
};

const fetchSingleProduct = async (productId) => db.oneOrNone(fetchProductById, [productId])

const fetchAllProducts = async () => db.manyOrNone(fetchProducts);

const updateProduct = async (data, productId) => {
    const {description, price, size, color } = data;
    return db.one(updateProductById, [description, price, size, color, productId])
}

const deleteSingleProduct = async (productId) => db.oneOrNone(deleteProductByID, [productId])

const fetchProductWithRatings = async (productId) => {
    let averageRating = 0;
    const ratings = await fetchProductRatings(productId)
    const product = await fetchSingleProduct(productId)
    for (let i = 0; i < ratings.length; i++) {
        averageRating += parseInt(ratings[i].rating);
    }
    averageRating = averageRating / ratings.length
    // console.log(ratings)
    product.averageRating = averageRating;
    return product;
}

const fetchAvgProductRating = async (productId) => db.oneOrNone(fetchAvgRating, [productId])

module.exports = {
    addProduct,
    fetchSingleProduct,
    fetchAllProducts,
    updateProduct,
    fetchProductWithRatings,
    fetchAvgProductRating,
    deleteSingleProduct
  };
  