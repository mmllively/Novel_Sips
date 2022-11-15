//requires a login 
//Shows user saved books

const router = require('express').Router();
const { Drink, User, Book } = require('../models');
const withAuth = require('../utils/auth');


// GET a Books
router.get('/', withAuth, async (req, res) => {
  console.log("working")
  try {
    const bookData = await Book.findAll();

       const books = bookData.map((book) => book.get({plain:true}));
       console.log(books);
       res.render('profile', {books, loggedIn: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});


// ADD a Book
router.post('/', withAuth, async (req, res) => {
  try {
      const newBook = await Book.create({
          ...req.body,
          user_id: req.session.user_id
      });

      res.status(200).json(newBook);

  } catch (err) {
      res.status(400).json(err);
  }
});


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
      },
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
    console.log(drinks);
    res.render('profile', {drinks, loggedIn: req.session.logged_in});
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
 