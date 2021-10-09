//retorna todos os produtos 

const getAllProducts = (req, res) => {
    console.log('função getAllProducts');
    res.send('Request getAllProducts feita');
  };
  
  //retorna os dados de um produto 
  const getProduct = (req, res) => {
    console.log('função getProduct');
    res.send('Usando o GET de um produto exclusivo');
  };
  
  const postAllProducts = (req, res) => {
    console.log('função postAllProducts');
    res.send('Request postAllProducts feita');
  };
  
  const putProduct = (req, res) => {
    console.log('função putProduct');
    res.send('Request putProduct feita');
  };
  
  const deleteProduct = (req, res) => {
    console.log('função deleteProduct');
    res.send('Request deleteProduct feita');
  };
  
  module.exports = {
    getAllProducts, getProduct, postAllProducts, putProduct, deleteProduct,
  };