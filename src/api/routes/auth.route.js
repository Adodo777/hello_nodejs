const { login, register, forgetPassword, resetPassword } = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const { 
    registerAdminSchema,
    loginAdminSchema,
    forgetPasswordAdminSchema,
    resetPasswordAdminSchema,
} = require('../validations/auth.validation');

router.post('/login', validate(loginAdminSchema), login);
router.post('/register', validate(registerAdminSchema), register);
router.post('/forget-password', validate(forgetPasswordAdminSchema), forgetPassword);
router.post('/reset-password', validate(resetPasswordAdminSchema), resetPassword);

module.exports = router;

