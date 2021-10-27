const express = require('express');
const UserController = require('../controller/userController');
const routes = express.Router();

routes.get('/', UserController.getUsers);
routes.post('/', UserController.postUsers);
routes.get('/:uid', UserController.getUserId);
routes.put('/:uid', UserController.putUser);
routes.delete('/:uid', UserController.deleteUser);


// router.get('/:userId', (req, res, next) => {
//     const id = req.params.userId
//     if(id === 'especial'){
//         res.status(200).send({
//             mensagem: 'Você pegou um usuário especial',
//             id: id
//         })
//     } else {
//         res.status(200).send({
//             mensagem: 'Esse id não corresponde a nenhum usuário existente'
//         })
//     }   
// })

// router.put('/:userId', (req, res, next) => {
//     const id = req.params.userId
//     if(id === 'especial'){
//         res.status(200).send({
//             mensagem: 'usuário alterado com sucesso',
//             id: id
//         })
//     } else {
//         res.status(200).send({
//             mensagem: 'Esse id não corresponde a nenhum usuário existente'
//         })
//     }   
// })

// router.delete('/:userId', (req, res, next) => {
//     const id = req.params.userId
//     if(id === 'especial'){
//         res.status(200).send({
//             mensagem: 'usuário deletado com sucesso',
//             id: id
//         })
//     } else {
//         res.status(200).send({
//             mensagem: 'Esse id não corresponde a nenhum usuário existente'
//         })
//     }   
// })


module.exports = routes