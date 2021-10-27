const { Orders } = require("../db/models/orders");

const getAllOrders = (req, res) => {
    Orders.findAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() =>
        res.json({
          message: 'ERROR! Try again!',
        })
      );
  };

module.exports = {
    getAllOrders
  };