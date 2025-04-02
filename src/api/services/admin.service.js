const AdminModel = require('../models/admin.model');

// get by email
const getByEmail = async (email) => {
    console.log("email", email);
    
    const admin = await AdminModel.findOne({ email });
    return admin;
}

// get by user name
const getByUserName = async (userName) => {
    const admin = await AdminModel.findOne({ userName });
    return admin;
}

module.exports = { getByEmail, getByUserName };