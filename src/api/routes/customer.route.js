const { getAll, remove, create, update } = require('../controllers/customer.controller');
const express = require('express');
const router = express.Router();
const createCustomerSchema = require('../validations/customer.validation');
const validate = require('../middlewares/validate');

router.get('/',(req, res) => getAll(req, res));
router.post('/', validate(createCustomerSchema), (req, res) => create(req, res));
router.put('/:id', validate(createCustomerSchema), (req, res) => update(req, res));
router.delete('/remove/:id', (req, res) => remove(req, res));

module.exports = router;