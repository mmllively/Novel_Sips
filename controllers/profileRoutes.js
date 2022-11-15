//requires a login 
//Shows user saved books

const router = require('express').Router();
const { Drink, User, Book } = require('../models');
const withAuth = require('../utils/auth');


// GET a Books
router.get('/book', withAuth, async (req, res) => {
  try {
    const bookData = await Book.findAll({
      ...req.body,
       user_id: req.session.user_id });

    if (!bookData) {
      res.status(404).json({ message: 'Only dust was found in the Bookshelf!' });
      return;
    }
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ADD a Book
router.post('/book', withAuth, async (req, res) => {
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
router.put('/book/:id', withAuth, async (req, res) => {
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
router.delete('/book/:id', withAuth, async (req, res) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });

    if (!bookData) {
      res.status(404).json({ message: 'No Book was found with this ID!' });
      return;
    }
    res.status(200).json(bookData);

  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;
 