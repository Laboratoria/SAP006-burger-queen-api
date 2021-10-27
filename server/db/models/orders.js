'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsToMany(models.Products, 
      {through: 'ProductOrders', foreignKey: 'order_id', as: 'products'});
    };
  };
  Orders.init({
    client_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
    processedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};