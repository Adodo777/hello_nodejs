const CustomerService = require('../services/customer.service');


// Get all customers
const getAll = async (req, res) => {
    try {
        const customers = await CustomerService.getAllCustomers();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get customer by id
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await CustomerService.getCustomerById(id);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new customer
const create = async (req, res) => {
    try {
        const newCustomer = await CustomerService.createCustomer(req.body);
        res.status(201).json({
            message: 'Customer created successfully',
            customer: newCustomer
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a customer
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const customer = await CustomerService.updateCustomer(id, updateData);
        if (customer) {
        res.status(200).json({
            message: 'Customer updated successfully',
            customer,
        });}
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a customer
const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await CustomerService.deleteCustomer(id);
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { 
    getAll, 
    getOne, 
    create, 
    update, 
    remove, 
};