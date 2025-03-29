const mongoose = require('mongoose');

const { Schema } = mongoose;

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
        },
        dateOfBirth: {
            type: Date,
            nullable: true
        },
        gender: {
            type: String,
            nullable: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Customer', customerSchema);