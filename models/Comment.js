const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",

        model: "user"
      }
    },
    drink_id: {

        model: "User"
      }
    },
    post_id: {

      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",

        model: "drink"

        model: "Post"

      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,

    modelName: 'comment',

    modelName: 'Comment',

  }
);

module.exports = Comment;