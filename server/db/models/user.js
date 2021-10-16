// users "hasMany" tem muitas orders
// products "belongsToMany" tem muitas orderns e c é productsorders
// productsOrders "belongsTo" pertence unicamente a orders e products
// orders "belongsTo" pertence a users e "belongsToMany" tem muitos produtos e c é productsorders

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, {
        foreignKey: "id",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "The name field cannot be empty." },
          notNull: { msg: "A name is required." },
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "The e-mail field cannot be empty." },
          notNull: { msg: "E-mail is required." },
          isEmail: { msg: "E-mail is invalid." },
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          notEmpty: { msg: "Password can not be empty" },
          notNull: { msg: "A password is required" },
        },
      },

      role: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "The role field cannot be empty.",
          },
          notNull: {
            msg: "A role is required",
          },
        },
      },

      restaurant: {
        type: DataTypes.STRING,
        defaultValue: "MagicBurger",
      },
      // },

      // email: DataTypes.STRING,
      // password: DataTypes.STRING,
      // role: DataTypes.STRING,
      // restaurant: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
