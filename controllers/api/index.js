const router = require('express').Router();

const userRoutes = require('./userRoutes');
const drinkRoutes = require('./drinkRoutes');
const commentRoutes = require('./comment.routes')

router.use('/users', userRoutes);
router.use('/drinks', drinkRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
