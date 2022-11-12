//requires a login 
//Shows user selected drinks with books, create and edit

const router = require('express').Router();
const { Drink, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

//get all drinks they selected
router.get('/', withAuth, async (req, res) => {
    try {
      const postData = await Drink.findAll({
        where: {
        user_id: req.session.user_id
      },
      include: [{model: User}]
    });

    const posts = postData.map((post) => post.get({plain: true}));
    res.render("profile",{posts, logged_in: req.session.logged_in });

} catch (err) {
  res.status(400).json(err);
}
});




module.exports = router;
 