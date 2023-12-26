import express from 'express';
const router = express.Router();

import signUp from '../controllers/auth/signupController.js';
import signIn from '../controllers/auth/signInController.js';
import signOut from '../controllers/auth/signOutController.js';
import updateProfileController from "../controllers/auth/updateProfileController.js";
import { signUpValidationRules, signInValidationRules } from '../validators/authValidator.js';
import requireAuth from "../middlewares/authMiddleware.js";

router.post('/signup', signUpValidationRules, signUp);
router.post('/signin', signInValidationRules, signIn);
router.get('/signout', signOut);
router.post("/profile", requireAuth,updateProfileController);

export default router;
