

const { Drink } = require('../models');

const drinkData =

[
    {
      "name": "Cosmo",
      "description": "thank you sex and the city",
      "subject": "romance",
      "user_id": 1
    },
    {
        "name": "Old Fashioned",
        "description": "you'll grow a beard",
        "subject": "mystery",
        "user_id": 2
      },
      {
        "name": "CapriSun",
        "description": "joy for children",
        "subject": "kids",
        "user_id": 3
      },
      {
        "name": "Water",
        "description": "does it get any more boring?",
        "subject": "mathematics",
        "user_id": 4
      }
  ]

  const seedDrink = () => Drink.bulkCreate(drinkData);

module.exports = seedDrink;