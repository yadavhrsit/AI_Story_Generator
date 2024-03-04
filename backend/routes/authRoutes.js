import express from "express";
const router = express.Router();
import Multer from "multer";
import signUp from "../controllers/auth/signupController.js";
import signIn from "../controllers/auth/signInController.js";
import signOut from "../controllers/auth/signOutController.js";
import updateProfileController from "../controllers/auth/updateProfileController.js";
import {
  signUpValidationRules,
  signInValidationRules,
} from "../validators/authValidator.js";
import requireAuth from "../middlewares/authMiddleware.js";

const multer = new Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
const upload = multer.single("avatar");

router.post("/signup", upload, signUpValidationRules, signUp);
router.post("/signin", signInValidationRules, signIn);
router.get("/signout", signOut);
router.post("/profile",upload, requireAuth, updateProfileController);

export default router;
