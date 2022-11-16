//requires a login 
//Shows user saved books

const router = require('express').Router();
const axios = require('axios');
const { Drink, User, Book } = require('../models');
const withAuth = require('../utils/auth');

const getBooks = async function(title){
  const books = await axios.get("http://openlibrary.org/search.json?q="+ title)
  return books;
}




// GET a Books
router.get('/:title', withAuth, async (req, res) => {
  console.log("working", req.params.title)
 
  try {
const books = await getBooks(req.params.title);
const drinkData = await Drink.findAll();
const drinks = drinkData.map((drink) => drink.get({ plain: true }));
var drink = drinks[Math.floor(Math.random()*drinks.length)]

console.log(books.data.docs[0].title);
console.log(books.data.docs[0].author_name[0]);
console.log(books.data.docs[0].isbn[1]);
console.log(drink);

// const topFive = [];

// for (let i = 0; i < 5; i++){
//  topFive.push(books.data.docs[i]);
// }
// console.log(topFive);

res.render('recommendation', {book:{
  title: books.data.docs[0].title, 
  author: books.data.docs[0].author_name[0],
  image: books.data.docs[0].isbn[1],
}, drink, loggedIn: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});


// ADD a Book
// router.post('/', withAuth, async (req, res) => {
//   try {
//       const newBook = await Book.create({
//           ...req.body,
//           user_id: req.session.user_id
//       });

//       res.status(200).json(newBook);

//   } catch (err) {
//       res.status(400).json(err);
//   }
// });


// UPDATE a Book
router.put('/:id', withAuth, async (req, res) => {
  try {
    const bookData = await Book.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });

    if (!bookData[0]) {
      res.status(404).json({ message: 'No Book was found with this ID!' });
      return;
    }
    res.status(200).json(bookData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Book
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Drinks by ID
router.get('/:id', async (req, res) => {
  try {
    const drinkData = await Drink.findByPk(req.params.id);

    const drinks = drinkData.get({plain:true});
    // console.log(drinks);
    res.render('profile', {drinks, loggedIn: req.session.logged_in});
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  // console.log('route hit')
  console.log(req.body)
  // try {
  //   const drinkData = await Drink.findAll();

  //   const drinks = drinkData.map((drink) => drink.get({ plain: true }));
  //   const drink = drinks[Math.floor(Math.random()*drinks.length)]
   
    
    res.render('profile');
   
  // }catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});


module.exports = router;
 
