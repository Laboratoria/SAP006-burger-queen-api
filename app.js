const express = require('express');
const app = express();
const morgan = require('morgan');

const productsRoutes = require('./server/routes/products');
const orderRoutes = require('./server/routes/ordersRoutes');
const usersRoutes = require('./server/routes/usersRoutes');

app.use(morgan('dev'));

app.use('/products', productsRoutes);
app.use('/orders', orderRoutes);
app.use('/users', usersRoutes);

app.use((req, res, next) => {
    const error = new Error('Rota não encontrada');
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send ({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;