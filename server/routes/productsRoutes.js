const express = require('express');
const ProductController = require('../controller/productController');
const routes = express.Router();

routes.get('/', ProductController.getProducts);
routes.get('/:productId', ProductController.getProductId);

module.exports = routes
