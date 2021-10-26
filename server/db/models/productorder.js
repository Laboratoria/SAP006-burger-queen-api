'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    static associate(models) {
      ProductOrder.belongsTo(models.Product);
      ProductOrder.belongsTo(models.Order);
      // models.Order.belongsToMany(models.Product, {through: 'ProductOrder'});
      // models.Product.belongsToMany(models.Order, {through: 'ProductOrder'});
    }
  };
  ProductOrder.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false, 
    modelName: 'ProductOrder',
    tableName: 'ProductOrder',
  });
  return ProductOrder;
};