const sequelize = require('../../db');
const Product = require('./product');
const User = require('./user');
const Wishlist = require('./wishlist');

// Setup associations
User.belongsToMany(Product, { through: Wishlist });
Product.belongsToMany(User, { through: Wishlist });

module.exports = {
  sequelize,
  Product,
  User,
  Wishlist,
};
