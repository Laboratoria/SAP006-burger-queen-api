'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    static associate(models) {
      ProductOrder.belongsTo(models.Product, { foreignKey: 'product_id' });
      ProductOrder.belongsTo(models.Order, { foreignKey: 'order_id' });
      // models.Order.belongsToMany(models.Product, {through: 'ProductOrder'});
      // models.Product.belongsToMany(models.Order, {through: 'ProductOrder'});
    }
  };
  ProductOrder.init({
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: true,
    modelName: 'ProductOrder',
    tableName: 'ProductOrder',
  });
  return ProductOrder;
};
