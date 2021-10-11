const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'Usando Get dentro da rota products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'usando POST dentro da rota products'
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Usando Get de um produto especifico',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        })
    }   
})

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'usando PATCH dentro da rota products'
    })
})

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'usando DELETE dentro da rota products'
    })
})



module.exports = router
