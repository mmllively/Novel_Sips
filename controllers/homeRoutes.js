const router = require('express').Router();


router.get('/', async (req, res) => {

    //This line is rendering the homepage
    res.render('homepage', {
      logged_in: req.session.logged_in 
    });
});



//Get drink by ID (For future development)

// router.get('/drink/:id', async (req, res) => {
//   try {
//     const drinkData = await Drink.findOne({
//       where: {
//         id: req.params.id
//       },
//       attribute: ["name", "description", "subject"],

//       include: [{
//         model: Subject,
//         attributes: ['subject_title']
//       }]
//     })

//     if (!drinkData) {
//       res.status(404).json({ message: "Not a valid Drink ID..." });
//       return;
//     }

//     res.status(200).json(drinkData);

//   } catch (err) {
//     console.log(err);
//   }
// });


// If the user is already logged in, redirect the request to another route
router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

//SING UP
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

//SIGN UP button route
router.get('/signup', (req, res) => {
 
  res.render('signup');
});

//ABOUT US button route
router.get('/about-us', (req, res) =>{

  res.render('about-us');
});

//CONTAC US button route
router.get('/contact-us', (req, res)=> {

  res.render('contact-us');
})

//DRINKS button route
router.get('/drinks', (req, res)=> {

  res.render('drinks');
})


module.exports = router;
