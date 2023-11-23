const Sequelize = require('sequelize');
const db = require('../../db');

const Product = db.define('Product', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // makes sure the string is not empty
      }
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    price: {
      type: Sequelize.DECIMAL(10, 2), // Adjust precision and scale as needed
      allowNull: false
    },
    rating: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true // validates for a proper URL format
      },
      field: 'image_url' // To match the database field if it's in snake_case
    }
  }, {
    // Sequelize options like timestamps, tableName etc.
    timestamps: true, // Adds createdAt and updatedAt timestamps
  });
  
  module.exports = Product;

