//requires a login 
//Shows user saved drinks with books

const router = require('express').Router();
const { Drink, Comment, User } = require('../models');
// const withAuth = require('../utils/auth');

//get all drinks they selected
router.get('/shelf', async (req, res) => {
  try {
    const allDrinks = await Drink.findAll ({
      attributes: ["name", "description", "subject"]
})

res.status(200).json(allDrinks);

} catch (err) {
console.info(err);
res.status(500).json(err);
}
})

    // const posts = postData.map((post) => post.get({plain: true}));
    // res.render("profile",{posts, logged_in: req.session.logged_in });






module.exports = router;
 