//requires a login 
//Shows user saved drinks with books

const router = require('express').Router();
const { Drink, Comment, User, Book } = require('../models');
// const withAuth = require('../utils/auth');

//get all drinks they selected
// needs withAuth in the function
router.get('/', async (req, res) => {
  try {
  // const posts = postData.map((post) => post.get({plain: true}));
  res.render("profile",{
    // posts, logged_in: req.session.logged_in 
  });

} catch (err) {
console.info(err);
res.status(500).json(err);
}
})







module.exports = router;
 