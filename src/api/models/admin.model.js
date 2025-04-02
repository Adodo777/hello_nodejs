const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema(
    {
        fullName: {
            type: String,
            required: false
        },
        userName: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Admin', adminSchema);