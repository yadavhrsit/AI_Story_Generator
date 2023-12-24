import express from 'express';
const router = express.Router();

import signUp from '../controllers/auth/signupController.js';
import signIn from '../controllers/auth/signInController.js';
import signOut from '../controllers/auth/signOutController.js';
import { signUpValidationRules, signInValidationRules } from '../validators/authValidator.js';

router.post('/signup', signUpValidationRules, signUp);
router.post('/signin', signInValidationRules, signIn);
router.get('/signout', signOut);

export default router;
