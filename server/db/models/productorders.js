'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrders extends Model {
    static associate(models) {
    }
  };
  ProductOrders.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductOrders',
    tableName: 'productOrders'
  });
  return ProductOrders;
};