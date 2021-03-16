const { addProduct, fetchAllProducts, updateProduct, fetchProductWithRatings, fetchSingleProduct, fetchAvgProductRating, deleteSingleProduct } = require('../services');

const addNewProduct = async (req, res) => {
    try {
      const userID = req.user.id;
      const username = req.user.userName
      const newProduct = await addProduct({ ...req.body, userId: userID, userName: username});
      res
        .status(201)
        .json({ status: 'success', message: 'Product added successfully.', data: newProduct });
  } catch (error) {
      console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const fetchSingleProductbyID = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: 'success', message: 'Product fetched ', data: req.product });
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const fetchAllProductsAvailable = async (req, res) => {
  try {
    const allProducts = await fetchAllProducts();
    res
      .status(200)
      .json({ status: 'success', message: 'All products fetched successfully', data: allProducts })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};


const deleteSingleProductbyID = async (req, res) => {
  try {
    const singleProduct = await deleteSingleProduct (req.params.productId)
    res
      .status(200)
      .json({ status: 'success', message: 'Product deleted ' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const updateExistingProduct = async (req, res) => {
  try {
    const updatedProduct = await updateProduct(req.body, req.params.productId);
    res
      .status(201)
      .json({ status: 'success', message: 'Product updated successfully.', data: updatedProduct });
} catch (error) {
    console.log(error)
  res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
}
};

const fetchProductRatings = async (req, res) => {
  try {
    const product = await fetchProductWithRatings(req.params.productId)
    res
      .status(200)
      .json({ status: 'success', message: 'Product fetched ', data: product });
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const fetchProductAvgRatings = async (req, res) => {
  try {
    const product = await fetchSingleProduct(req.params.productId)
    const rate = await fetchAvgProductRating(req.params.productId)
    res
      .status(200)
      .json({ status: 'success', message: 'Rating fetched ', data: {...product, rate} });
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
}

const updateProductWithRatings = async (req, res) => {
  try {
    const rate = await fetchAvgProductRating(req.params.productId);
    const updatedProduct = await updateProduct(req.params, rate.value);
    res
      .status(201)
      .json({ status: 'success', message: 'Product updated successfully.', data: updatedProduct });
} catch (error) {
    console.log(error)
  res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
}
};


module.exports = { addNewProduct, fetchSingleProductbyID, fetchAllProductsAvailable, updateExistingProduct, fetchProductAvgRatings, fetchProductRatings, updateProductWithRatings, deleteSingleProductbyID };