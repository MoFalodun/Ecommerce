const { addRating } = require('../services');

const addNewRating = async (req, res) => {
    try {
      const newRating = await addRating(req.body, req.params.productId);
      res
        .status(201)
        .json({ status: 'success', message: 'Product rating successful.', data: newRating });
  } catch (error) {
      console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = { addNewRating };