const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Money = sequelize.define('Money', {
  // Définissez vos champs et leurs types ici
  civility: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  money: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
 
});

module.exports = Money;
