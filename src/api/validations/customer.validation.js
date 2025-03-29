const Joi = require('joi');

const createCustomerSchema = Joi.object({
    fullname: Joi.string().required().messages({
        'string.empty': 'fullname is required',
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'email is required',
        'string.email': 'email is must be valid email',
    }),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    gender: Joi.string().required(),
});
module.exports = createCustomerSchema;
