const { signupSchema, loginSchema } = require('../validation');
const { getUserByUsername, getUserByEmail } = require('../services');
const validateSignup = (req, res, next) => {
    try {
      const { error } = signupSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({ status: 'fail', message: error.message });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
};

const validateLogin = (req, res, next) => {
    try {
      const { error } = loginSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({ status: 'fail', message: error.message });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
};
const checkIfUserExists = async (req, res, next) => {
    try {
        const userMail = await getUserByEmail(req.body.email);
        const userName = await getUserByUsername(req.body.userName);
      if (!userMail && !userName) {
        return next();
      }
      return res.status(404).json({ status: 'fail', message: 'user already exists.' });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
    }
  };

  module.exports = {
    validateSignup,
    validateLogin,
    checkIfUserExists,
  };
