const Joi = require('joi');

const createOrderSchema = Joi.object({
    products: Joi.array().items(Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().required(),
    })).required(),
    customer: Joi.object({
        customerId: Joi.string().required()
    }).required(),
    status: Joi.string().valid('pending', 'delivered', 'cancelled').default('pending'),
    date: Joi.date().default(Date.now)
});

module.exports = createOrderSchema;
