const AdminModel = require('../models/admin.model');
const { getByEmail, getByUserName } = require('./admin.service');


const login = async (data) => {
    const admin = await getByEmail(data.email);
    if (!admin) {
        throw new Error('Invalid email or password');
    }
    if (admin.password !== data.password) {
        throw new Error('Invalid email or password');
    }
    return admin;
}

const register = async (data) => {
    console.log("data", data);
    
    const adminEmail = await getByEmail(data.email);
    const adminName = await getByUserName(data.userName);
    if (adminEmail) {
        throw new Error('Admin with this email already exists');
    }
    if (adminName) {
        throw new Error('Admin with this userName already exists');
    }
    const newAdmin = await AdminModel.create(data);
    return newAdmin;
}

const forgetPassword = async (data) => {
    
}

const resetPassword = async (data) => {
    
}

module.exports = { login, register, forgetPassword, resetPassword };