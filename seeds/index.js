const seedComment = require('./comment-seeds');
const seedDrink = require('./drink-seed');
const seedUser = require('./user-seeds');


const sequelize = require('../config/connection');
//order matters
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedDrink();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedComment();
  console.log('\n----- TAGS SEEDED -----\n');



  process.exit(0);
};

seedAll();
