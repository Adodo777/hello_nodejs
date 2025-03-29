const CustomerModel = require('../models/customer.model');


// Get all customers
const getAllCustomers = async () => {
    const customers = await CustomerModel.find();
    return customers;
};

// Get customer by email
const getCustomerByEmail = async (email) => {
    const customer = await CustomerModel.findOne({ email });
    return customer;
};

// Get customer by id
const getCustomerById = async (id) => {
    const customer = await CustomerModel.findById(id);
    return customer;
};

// Create a new customer
const createCustomer = async (customerData) => {
    const customerExists = await getCustomerByEmail(customerData.email);
    if (customerExists) {
        throw new Error('Customer with this email already exists');
    }
    const customer = await CustomerModel.create(customerData);
    return customer;
};

// Update a customer
const updateCustomer = async (id, customerData) => {
    const customer = await getCustomerById(id);
    if (!customer) {
        throw new Error('Customer not found');
    }
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(id, customerData, { new: true });
    return updatedCustomer;
};

// Delete a customer
const deleteCustomer = async (id) => {
    const customer = await getCustomerById(id);
    if (!customer) {
        throw new Error('Customer not found');
    }
    await CustomerModel.findByIdAndDelete(id);
    return "Customer deleted successfully";
};


module.exports = {
    getAllCustomers,
    getCustomerByEmail,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};