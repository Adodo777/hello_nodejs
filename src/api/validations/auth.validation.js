const Joi = require('joi');

const registerAdminSchema = Joi.object({
    fullName: Joi.string(),
    address: Joi.string(),
    phone: Joi.string(),
    userName: Joi.string().required().messages({
        'string.empty': 'userName is required',
    }),
    email: Joi.string().email(),
    password: Joi.string().required().messages({
        'string.empty': 'password is required',
        'password.min': 'password must be at least 8 characters long',
        'password.max': 'password must be at most 20 characters long',
    }),
});

const loginAdminSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'email is required',
        'string.email': 'email is must be valid email',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'password is required',
        'password.min': 'password must be at least 8 characters long',
        'password.max': 'password must be at most 20 characters long',
    }),
});

const forgetPasswordAdminSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'email is required',
        'string.email': 'email is must be valid email',
    }),
});

const resetPasswordAdminSchema = Joi.object({
    password: Joi.string().required().messages({
        'string.empty': 'password is required',
        'password.min': 'password must be at least 8 characters long',
        'password.max': 'password must be at most 20 characters long',
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'any.only': 'confirmPassword does not match password',
    }),
});

module.exports = {
    registerAdminSchema,
    loginAdminSchema,
    forgetPasswordAdminSchema,
    resetPasswordAdminSchema,
};