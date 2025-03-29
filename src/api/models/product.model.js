const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ['plastic', 'sachet'],
            required: true
        },
        code: {
            type: String,
            required: true
        },
        imageCover: {
            type: String,
            required: true
        },
        images: {
            type: [String],
            required: false
        },
        quantity: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);


