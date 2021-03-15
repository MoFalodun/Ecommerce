const db = require('../db/setup');
const { insertProduct, fetchProductById, fetchProducts, updateProductById } = require('../db/queries/product');
const { generateUUID } = require('../utils');

const addProduct = async (data) => {
    const id = generateUUID;
    const { title, description, userId, price, size, color} = data;
    return db.one(insertProduct, [id, title, description, userId, price, size, color]);
};

const fetchSingleProduct = async (productId) => db.oneOrNone(fetchProductById, [productId])

const fetchAllProducts = async () => db.manyOrNone(fetchProducts);

const updateProduct = async (data, productId) => {
    const {description, price, size, color } = data;
    return db.one(updateProductById, [description, price, size, color, productId])
}

module.exports = {
    addProduct,
    fetchSingleProduct,
    fetchAllProducts,
    updateProduct,
  };
  