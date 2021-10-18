const express = require('express');
const router = express.Router();
// const { getAllOrders } = require("../controller/exampleController")

router.get('/', (req, res, next) => {
    getAllOrders()
    res.status(200).send({
        mensagem:'Retorna todos os pedidos'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido criado com sucesso'
    })
})

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Detalhes de um pedido especial',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Esse id não corresponde a nenhum produto existente'
        })
    }   
})

router.put('/:orderId', (req, res, next) => {
    const id = req.params.orderId
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'pedido alterado com sucesso',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Esse id não corresponde a nenhum pedido existente'
        })
    }   
})

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'pedido deletado com sucesso',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Esse id não corresponde a nenhum pedido existente'
        })
    }   
})


module.exports = router