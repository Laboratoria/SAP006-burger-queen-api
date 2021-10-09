const getAllUsers = (req, res) => {
    console.log('função getAllUsers');
    res.send('Request getAllUsers feita');
  };
  
  const getUser = (req, res) => {
    console.log('função getUser');
    res.send('Request getUser feita');
  };
  
  const postUser = (req, res) => {
    console.log('função postUser');
    res.send('Request postUser feita');
  };
  
  const putUser = (req, res) => {
    console.log('função putUser');
    res.send('Request putUser feita');
  };
  
  const deleteUser = (req, res) => {
    console.log('função deleteUser');
    res.send('Request deleteUser feita');
  };
  
  module.exports = {
    getAllUsers, getUser, postUser, putUser, deleteUser,
  };