const { Router } = require('express');
const { validateSignup,
    checkIfUserExists, validateLogin, } = require('../middlewares');
const {
    addNewUser, loginUser,
} = require('../controllers');

const userRouter = Router();

userRouter.post('/signUp', validateSignup, checkIfUserExists, addNewUser );
userRouter.post('/login', validateLogin, loginUser, );

module.exports = { userRouter }
