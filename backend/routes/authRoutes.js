const express = require('express');
const router = express.Router();
const signUp  = require('../controllers/auth/signupController');
const signIn = require('../controllers/auth/signInController');
const signOut = require('../controllers/auth/signOutController');
const { signUpValidationRules,signInValidationRules } = require('../validators/authValidator');

router.post('/signup', signUpValidationRules, signUp);
router.post('/signin', signInValidationRules, signIn);
router.get('/signout', signOut);

module.exports = router;
