const { getAllPoducts, getOneProduct, createProduct, updateProduct, removeProduct} = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();
const createProductSchema = require('../validations/product.validation');
const validate = require('../middlewares/validate');

router.use(validate(createProductSchema));

router.get('/',(req, res) => getAllPoducts(req, res));
router.get('/:id', (req, res) => getOneProduct(req, res));
router.post('/', (req, res) => createProduct(req, res));
router.put('/:id', (req, res) => updateProduct(req, res));
router.delete('/:id', (req, res) => removeProduct(req, res)); 

module.exports = router;