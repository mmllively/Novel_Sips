
const { User } = require('../models');

const userData =
  [
    {
      "name": "Khris",
      "email": "khris1@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Ila",
      "email": "ila2@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Karina",
      "email": "karina3@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Maggie",
      "email": "maggie4@hotmail.com",
      "password": "password12345"
    }

  ]

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true
});

module.exports = seedUser;