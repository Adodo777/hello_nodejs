const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
);

const customerSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }

    }
);

const orderSchema = new Schema(
    {
        products: {
            type: [productSchema], 
            required: true
        },
        customer: {
            type: customerSchema, 
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'delivered', 'cancelled'],
            default: 'pending'
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('Order', orderSchema);