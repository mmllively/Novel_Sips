const router = require('express').Router();
const { Drink } = require('../../models/');
const withAuth = require('../../utils/auth');


//get ALL drinks we have
router.get('/drink', async (req, res) => {
  try {
    const drinkData = await Drink.findAll({
      include: [
      {
        attributes: ['name', 'description', 'subject'],
      },
    ],
  });
const drinks = drinkData.map((drink) =>
drink.get({ plain: true })
);
res.render('homepage', {
  drinks,
});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//get select drinks
router.get('/drink/:id', withAuth, async (req, res) => {
  try {
    const newDrink = await Drink.findByPk(req.params.id, {
      include: [
        {
          attributes: [
            'id',
            'name',
            'description',
            'subject',
          ],
        },
      ],
    });

    const drink = DrinkData.get({ plain: true })
    res.render('drink', { drink });
  } catch (err) {
    res.status(400).json(err);
  }
});
// delete drink
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
