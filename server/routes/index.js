const { Router } = require('express');
const ExampleRouter = require('./exampleRouter');
const usersRouter = require('./usersRouter');
const productsRouter = require('./productsRouter');
const OrdersRouter = require('./ordersRouter');

const router = Router();

// aqui vai todas as rotas
router.use('/example', ExampleRouter);
router.use('/orders', OrdersRouter);
router.use('/products', productsRouter);
router.use('/users', usersRouter);


module.exports = router;