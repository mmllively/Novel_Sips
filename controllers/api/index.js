const router = require('express').Router();

const userRoutes = require('./userRoutes');
const drinkRoutes = require('./drinkRoutes');
const commentRoutes = require('./comment.routes');
const bookRoutes = require('./bookRoute');

router.use('/users', userRoutes);
router.use('/drinks', drinkRoutes);
router.use('/comments', commentRoutes);
router.use('/bookshelf', bookRoutes);


module.exports = router;
