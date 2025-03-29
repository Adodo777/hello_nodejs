const ProductService = require('../services/product.service');


// Get all products
const getAllPoducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get one product
const getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductService.getProductById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new product
const createProduct = async (req, res) => {
    try {
        const newProduct = await ProductService.createProduct(req.body);
        res.status(201).json({
            message: 'Product created successfully',
            product: newProduct,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const product = await ProductService.updateProduct(id, updateData);
        res.status(200).json({
            message: 'Product updated successfully',
            product,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await ProductService.deleteProduct(id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { 
    getAllPoducts, 
    getOneProduct, 
    createProduct, 
    updateProduct, 
    removeProduct,
};