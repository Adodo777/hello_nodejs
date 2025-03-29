const Joi = require('joi');

const createProductSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    type: Joi.string().valid('plastic', 'sachet').required(),
    code: Joi.string().required(),
    imageCover: Joi.string().required(),
    images: Joi.array().items(Joi.string()),
    quantity: Joi.number().required()
});

module.exports = createProductSchema;
