const OrderService = require('../services/order.service');

// Get all orders
const getAll = async (req, res) => {
    try {
        const orders = await OrderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get order by id
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await OrderService.getOrderById(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get order by customer id
const getOrdersByCustomerId = async (req, res) => {
    try {
        const { id } = req.params;
        const orders = await OrderService.getOrdersByCustomerId(id);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get order by product id
const getOrdersByProductId = async (req, res) => {
    try {
        const { id } = req.params;
        const orders = await OrderService.getOrdersByProductId(id);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new order
const create = async (req, res) => {
    try {
        const newOrder = await OrderService.createOrder(req.body);
        res.status(201).json({
            message: 'Order created successfully',
            order: newOrder
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update order status
const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedOrder = await OrderService.updateOrderStatus(id, status);
        res.status(200).json({
            message: 'Order status updated successfully',
            order: updatedOrder
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a order
const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await OrderService.deleteOrder(id);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { 
    getAll, 
    getOne, 
    getOrdersByCustomerId, 
    getOrdersByProductId, 
    create, 
    updateStatus, 
    remove 
};