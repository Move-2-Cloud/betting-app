const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
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
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zipcode: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
 
});

module.exports = User;
