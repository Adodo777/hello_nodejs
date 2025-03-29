const { 
    getAll, 
    getOne, 
    getOrdersByCustomerId, 
    getOrdersByProductId, 
    create, 
    updateStatus, 
    remove 
} = require('../controllers/order.controller');
const express = require('express');
const router = express.Router();
const createOrderSchema = require('../validations/order.validation');
const validate = require('../middlewares/validate');

router.use(validate(createOrderSchema));

router.get('/',(req, res) => getAll(req, res));
router.get('/customer/:id', (req, res) => getOrdersByCustomerId(req, res));
router.get('/product/:id', (req, res) => getOrdersByProductId(req, res));
router.get('/:id', (req, res) => getOne(req, res));
router.post('/', (req, res) => create(req, res));
router.put('/:id', (req, res) => updateStatus(req, res));
router.delete('/:id', (req, res) => remove(req, res));

module.exports = router;