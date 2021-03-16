const { productSchema, updateProductSchema } = require('../validation');
const { fetchSingleProduct, fetchAvgProductRating } = require('../services');

const validateProduct = (req, res, next) => {
    try {
      const { error } = productSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({ status: 'fail', message: error.message });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
};

const checkIfProductExists = async (req, res, next) => {
  try {
    const selectedProduct = await fetchSingleProduct(req.params.productId);
    if (selectedProduct) {
      req.product = selectedProduct;
      return next();
    }
    return res.status(404).json({ status: 'fail', message: 'product does not exist.' });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const checkOwner = async (req, res, next) => {
  try {
    const product = await fetchSingleProduct(req.params.productId)
    if (product.user_id === req.user.id) {
      return next();
    }
    return res.status(404).json({ status: 'fail', message: 'product does not exist./ you are not the owner of this product' });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const checkOwnerForRatings = async (req, res, next) => {
  try {
    const product = await fetchSingleProduct(req.params.productId)
    if (product.user_id !== req.user.id) {
      return next();
    }
    return res.status(404).json({ status: 'fail', message: 'You are the owner of this product' });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const validateUpdateProduct = (req, res, next) => {
  try {
    const { error } = updateProductSchema.validate(req.body);
    if (!error) {
        return next();
    }
    console.log(error.message)
    return res.status(400).json({ status: 'fail', message: error.message });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};
module.exports = { validateProduct, checkIfProductExists, checkOwner, validateUpdateProduct, checkOwnerForRatings };
