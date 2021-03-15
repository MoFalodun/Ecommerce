const { addProduct, fetchAllProducts, updateProduct } = require('../services');

const addNewProduct = async (req, res) => {
    try {
      const newProduct = await addProduct(req.body);
      res
        .status(201)
        .json({ status: 'success', message: 'Product added successfully.', data: newProduct });
  } catch (error) {
      console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const fetchSingleProduct = async (req, res) => {
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

const updateExistingProduct = async (req, res) => {
  try {
    const updatedProduct = await updateProduct(req.body);
    res
      .status(201)
      .json({ status: 'success', message: 'Product updated successfully.', data: newProduct });
} catch (error) {
    console.log(error)
  res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
}
};


module.exports = { addNewProduct, fetchSingleProduct, fetchAllProductsAvailable, updateExistingProduct };