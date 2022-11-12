
const { Subject } = require('../models');

const subjectData =[
    {
      "subject_name": "Romance",
      "description": "A love story between two aliens",
      
    },
   
   
  ]

  const seedSubject = () => Comment.bulkCreate(commentData);

module.exports = seedSubject;