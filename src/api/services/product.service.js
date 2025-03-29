const ProductModel = require('../models/product.model');


// Get product by id
const getProductById = async (id) => {
    const product = await ProductModel.findById(id);
    return product;
};

// Get product by code
const getProductByCode = async (code) => {
    const product = await ProductModel.findOne({ code });
    return product;
};

// Generate productUniqueCode
const generateProductUniqueCode = async () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code;
    do {
        code = '';
        for (let i = 0; i < 6; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } while (await getProductByCode(code));
    return code;
};

// Get all products
const getAllProducts = async () => {    
    const products = await ProductModel.find();
    return products;
};

// Create a new product
const createProduct = async (product) => {
    const productUniqueCode = await generateProductUniqueCode();
    product.code = productUniqueCode;
    const newProduct = await ProductModel.create(product);
    return newProduct;
};

// update a product
const updateProduct = async (id, product) => {
    const productToUpdate = await getProductById(id);
    if (!productToUpdate) {
        throw new Error('Product not found');
    }
    product.code = productToUpdate.code;
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, product, { new: true });
    return updatedProduct;
};

// Delete a product
const deleteProduct = async (id) => {
    const productToDelete = await getProductById(id);
    if (!productToDelete) {
        throw new Error('Product not found');
    }
    await ProductModel.findByIdAndDelete(id);
    return "Product deleted successfully";
};


module.exports = {
    getProductById,
    getProductByCode,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};