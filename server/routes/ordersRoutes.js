const express = require('express');
const routes = express.Router();
const OrdersController = require('../controller/orderController');

routes.get('/', OrdersController.getOrders);
routes.post('/', OrdersController.postOrders);
routes.get('/:orderId', OrdersController.getOrderId);
routes.put('/:orderId', OrdersController.putOrder);
routes.delete('/:orderId', OrdersController.deleteOrder);

// router.get('/', (req, res, next) => {
//     res.status(200).send({
//         mensagem:'Retorna todos os pedidos'
//     });
// });

// router.post('/', (req, res, next) => {
//     Orders.create(req.body).then(o => {
//         res.status(201).send(o.dataValues)
//     });   
// })

// router.get('/:orderId', (req, res, next) => {
//     const id = req.params.orderId
//     if(id === 'especial'){
//         res.status(200).send({
//             mensagem: 'Detalhes de um pedido especial',
//             id: id
//         })
//     } else {
//         res.status(200).send({
//             mensagem: 'Esse id não corresponde a nenhum produto existente'
//         })
//     }   
// })

// router.put('/:orderId', (req, res, next) => {
//     const id = req.params.orderId
//     if(id === 'especial'){
//         res.status(200).send({
//             mensagem: 'pedido alterado com sucesso',
//             id: id
//         })
//     } else {
//         res.status(200).send({
//             mensagem: 'Esse id não corresponde a nenhum pedido existente'
//         })
//     }   
// })

// router.delete('/:orderId', (req, res, next) => {
//     const id = req.params.orderId
//     if(id === 'especial'){
//         res.status(200).send({
//             mensagem: 'pedido deletado com sucesso',
//             id: id
//         })
//     } else {
//         res.status(200).send({
//             mensagem: 'Esse id não corresponde a nenhum pedido existente'
//         })
//     }   
// })


module.exports = routes