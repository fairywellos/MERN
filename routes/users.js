const express = require('express');
const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/user');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', userController.postRegister);

// @route POST api/users/login
// @desc Login user / Returning JWT token
// @access Public
router.post('/login', userController.postLogin);

// @route POST api/users/reset-password
// @desc Reset user password
// @access Public
router.post('/reset-password', userController.postResetPassword);

// @route POST api/users/reset-password
// @desc Return user who requested reset password
// @access Public
router.get('/reset-password/:confirmToken', userController.getResetPassword);

// @route   PUT api/users/reset-password/:confirmToken
// @desc    Reset password
// @access  Public
router.put('/reset-password/:confirmToken', userController.putResetPassword);

// @route POST api/users/:id
// @desc Return current user profile
// @access Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  userController.getProfile,
);

module.exports = router;
