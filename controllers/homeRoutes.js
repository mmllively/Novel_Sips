const router = require('express').Router();
const { Drink, Comment, User, Book } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    // get all the drinks with comments
    const drinkData = await Drink.findAll({

      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const drinks = drinkData.map((drink) => drink.get({ plain: true }));



    //This line is rendering the homepageroutes.hbs
    res.render('homepage', {
      drinks, 
      logged_in: req.session.logged_in 
    });


    // Pass serialized data and session flag into template
    // res.render('homepage', { 
    //   projects, 
    //   logged_in: req.session.logged_in 
    // });

  } catch (err) {
    res.status(500).json(err);
  }
});


//Get drink by ID
router.get('/drink/:id', async (req, res) => {
  try {
    const drinkData = await Drink.findOne({
      where: {
        id: req.params.id
      },
      attribute: ["name", "description", "subject"],

      include: [{
        model: Subject,
        attributes: ['subject_title']
      }]
    })

    if (!drinkData) {
      res.status(404).json({ message: "Not a valid Drink ID..." });
      return;
    }

    res.status(200).json(drinkData);

    // const drinks = projectData.get({ plain: true });

    // res.render('drink', {
    //   ...drink,
    //   logged_in: req.session.logged_in
    // });

  } catch (err) {
    console.log(err);
  }
});

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Drink }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('homepage', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route

  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});



router.get('/signup', (req, res) => {
  if (req.session.signedUp) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});



  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

//   res.render('login');
// });


router.get('/signup', (req, res) => {
  if (req.session.signedUp) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

// LOG IN
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

//SIGN UP
router.get('/signup', (req, res) => {
 
  res.render('signup');
});

//ABOUT US
router.get('/about-us', (req, res) =>{

  res.render('about-us');
});

//CONTAC US
router.get('/contact-us', (req, res)=> {

  res.render('contact-us');
})



module.exports = router;
