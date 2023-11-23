const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); 

// Get all products
router.get('/', productController.getAllProducts);

// Get a single product by ID
router.get('/:id', productController.getProductById);

// Define more routes as needed (POST, PUT, DELETE)

module.exports = router;
