const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'Retorna todos os usuários'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usuário criado com sucesso'
    })
})

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Você pegou um usuário especial',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Esse id não corresponde a nenhum usuário existente'
        })
    }   
})

router.put('/:userId', (req, res, next) => {
    const id = req.params.userId
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'usuário alterado com sucesso',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Esse id não corresponde a nenhum usuário existente'
        })
    }   
})

router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'usuário deletado com sucesso',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Esse id não corresponde a nenhum usuário existente'
        })
    }   
})


module.exports = router