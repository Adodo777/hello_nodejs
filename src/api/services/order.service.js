const OrderModel = require('../models/orders.model');
const CustomerModel = require('../models/customer.model');
const ProductModel = require('../models/product.model');


// Get order by id
const getOrderById = async (id) => {
    const order = await OrderModel.findById(id);
    return order;
};

// Get order by customer id
const getOrderByCustomerId = async (customerId) => {
    const order = await OrderModel.findOne({ customerId });
    return order;
};

// Get order by product id
const getOrderByProductId = async (productId) => {
    const order = await OrderModel.findOne({ productId });
    return order;
};


// Get all orders
const getAllOrders = async () => {    
    const orders = await OrderModel.find();
    return orders;
};

// Create a new order
const createOrder = async (order) => {
    const customer = await CustomerModel.findById(order.customerId);
    if (!customer) {
        throw new Error('Customer not found');
    }    
    const products = await ProductModel.find({ 
        _id: { $in: order.products.map(product => product.productId) } 
    });
    if (products.length !== order.products.length) {
        throw new Error('One or more products not found');
    }
    const newOrder = await OrderModel.create(order);
    return newOrder;
};

// Order Status change
const updateOrderStatus = async (id, status) => {
    const order = await getOrderById(id);
    if (!order) {
        throw new Error('Order not found');
    }
    order.status = status;
    await order.save();
    return order;
}
// Delete a order
const deleteOrder = async (id) => {
    const order = await getOrderById(id);
    if (!order) {
        throw new Error('Order not found');
    }
    await OrderModel.findByIdAndDelete(id);
    return "Order deleted successfully";
};


module.exports = { 
    getOrderById, 
    getOrderByCustomerId, 
    getOrderByProductId, 
    getAllOrders, 
    createOrder,
    updateOrderStatus,
    deleteOrder 
};