const sequelize = require('./db'); 
// const Product = require('./app/models/product'); 
const User = require('./app/models/user');

//sequelize.sync({ force: true }) => drops the table if it already exists and re-creates it
sequelize.sync({ force: false }) // Synchronize models with the database
  .then(() => {
    console.log('Database & tables created!');
    process.exit();
  })
  .catch(err => {
    console.error('Error during database synchronization:', err);
    process.exit(1);
  });

