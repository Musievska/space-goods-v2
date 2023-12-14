require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

// Import models
const User = require('./app/models/user')(sequelize);
console.log(require.resolve('./app/models/product'));

// const Product = require('./app/models/product')(sequelize);
// Sync all models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error during database synchronization:', err);
  });

module.exports = { sequelize, User };
