//requires a login 
//Shows user saved drinks with books

const router = require('express').Router();
const { Drink, Comment, User } = require('../models');
// const withAuth = require('../utils/auth');

//get all drinks they selected
// router.get('/profile', async (req, res) => {
//   try {
//     const allDrinks = await Drink.findAll ({
//       attributes: ["name", "description", "subject"]
// })

// //where subject 
// res.status(200).json(allDrinks);

// } catch (err) {
// console.info(err);
// res.status(500).json(err);
// }
// })

router.get('/', async (req, res) => {
  try {
    const drinkData = await Drink.findAll()

    const drinks = drinkData.get({plain:true});
    
    res.render('profile', {
      drinks,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const drinkData = await Drink.findByPk(req.params.id);

    const drinks = drinkData.get({plain:true});
    console.log(drinks);
    res.render('profile', {drinks, loggedIn: req.session.logged_in});
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});













    // const posts = postData.map((post) => post.get({plain: true}));
    // res.render("profile",{posts, logged_in: req.session.logged_in });






module.exports = router;
 