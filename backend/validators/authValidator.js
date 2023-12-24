import { body } from 'express-validator';

const signInValidationRules = [
  body('email')
    .isEmail().withMessage('Invalid email address')
    .trim()
    .isLength({ min: 6, max: 30 }).withMessage('Email must be between 6 and 30 characters')
    .notEmpty().withMessage('Email is required'),
  body('password')
    .isLength({ min: 6, max: 30 }).withMessage('Password must be between 6 and 30 characters')
    .notEmpty().withMessage('Password is required')
];

const signUpValidationRules = [
  body('fullname')
    .isLength({ min: 6, max: 20 }).withMessage('Fullname must be between 6 and 20 characters')
    .notEmpty().withMessage('Fullname is required'),
  body('email')
    .isEmail().withMessage('Invalid email address')
    .trim()
    .isLength({ min: 6, max: 30 }).withMessage('Email must be between 6 and 30 characters')
    .notEmpty().withMessage('Email is required'),
  body('password')
    .isLength({ min: 6, max: 30 }).withMessage('Password must be between 6 and 30 characters')
    .notEmpty().withMessage('Password is required')
];

export { signInValidationRules, signUpValidationRules };
