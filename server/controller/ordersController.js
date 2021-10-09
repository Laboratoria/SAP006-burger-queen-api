// const express = require("express");

// const app = express()
// const isis = [];
// app.use(express.json())
// app.listen(3330, () => console.log("agora vai em nome de Deus"));


// app.post("/orders", (request, response) => {
//   const { title, name } =  request.body; 
//   const julli = {title, name}
//   isis.push(julli)
//   return response.json(julli)
// });

const getAllOrders = (req, res) => {
    console.log('função getAllOrders');
    res.send('Retorna os pedidos');
  };
  
  const getOrder = (req, res) => {
    console.log('função getOrder');
    res.send('Detalhes do pedido getOrder');
  };
  
  const postOrder = (request, response) => {
    console.log('função postAllOrders');
    const {title, name} =  request.body; 
    const julli = {title, name}
    isis.push(julli)
    return response.json(julli)
  };
  
  const putOrder = (req, res) => {
    console.log('função putOrder');
    res.send('Request putOrder feita');
  };
  
  const deleteOrder = (req, res) => {
    console.log('função deleteOrder');
    res.send('Pedido excluído deleteOrder');
  };
  
  module.exports = {
    getAllOrders, getOrder, postOrder, putOrder, deleteOrder,
  };