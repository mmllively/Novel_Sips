const User = require('./User');
const Drink = require('./Drink');
const Comment = require('./Comment');
const Book = require('./Book');

User.hasMany(Drink, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Drink.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Drink.hasMany(Comment, {
  foreignKey: 'drink_id'
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Drink, Comment, Book };
