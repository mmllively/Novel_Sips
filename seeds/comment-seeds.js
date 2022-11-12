

const { Comment } = require('../models');

const commentData =[
    {
      "content": "I love this drink!",
      "user_id": 1,
      "drink_id": 1
    },
   
    {
        "content": "This drink was nasty!",
        "user_id": 2,
        "drink_id": 2
      },
   
      {
        "content": "This is my new go-to drink!",
        "user_id": 3,
        "drink_id": 3
      },

    {
        "content": "I added some orange zest and it made it so tasty!",
        "user_id": 4,
        "drink_id": 4
      }
  ]

  const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;