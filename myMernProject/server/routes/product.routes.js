const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.post('/products', productController.createProduct);

module.exports = router;
