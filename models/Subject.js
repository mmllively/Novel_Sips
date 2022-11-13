const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Subject extends Model {}

Subject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [50],
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'subject',
  }
);

module.exports = Subject;