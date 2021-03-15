const { addRating } = require("../services");

const addNewRating = async (req, res) => {
    try {
      const userID = req.user.id;
      const productId = req.params.productId;
      const newRating = await addRating({ ...req.body, userId: userID, productId: productId }); 
      console.log(req.user)
      res
        .status(201)
        .json({ status: 'success', message: 'Thank you for rating this product.', data: newRating });
  } catch (error) {
      console.log(error)
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};


module.exports = { addNewRating };