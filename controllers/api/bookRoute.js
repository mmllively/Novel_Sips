const router = require('express').Router();
const Book = require('../../models/Book');

// GET a Books
router.get('/', async (req, res) => {
    try {
      const bookData = await Book.findAll(req.params.body);
      if (!bookData) {
        res.status(404).json({ message: 'Only dust was found in the Bookshelf!' });
        return;
      }
      res.status(200).json(bookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // UPDATE a Book
  router.put('/:id', async (req, res) => {
    try {
      const bookData = await Book.update(req.body, {
        where: {
          id: req.params.id,
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
  router.delete('/:id', async (req, res) => {
    try {
      const bookData = await Book.destroy({
        where: {
          id: req.params.id,
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