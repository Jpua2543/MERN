const ProductController = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.get('/', ProductController.findAllProducts);
router.get('/:id', ProductController.findOneProduct);
router.patch('/:id', ProductController.updateProduct);
router.post('/', ProductController.createProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
