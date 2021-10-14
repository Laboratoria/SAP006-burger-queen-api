'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsToMany(models.Orders, {
        through: 'ProductOrders',
        as: 'orders',
        foreignKey: 'product_id',
        otherKey: 'order_id',
      }
    )}
  };
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    sub_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};