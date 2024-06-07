const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 
const Money = require('../models/Money'); 

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      civility: req.body.civility,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthdate: req.body.birthdate,
      country: req.body.country,
      city: req.body.city,
      adress: req.body.adress,
      zipcode: req.body.zipcode,
      password: hashedPassword,
      email: req.body.email,
    });

    //Vérifier si on laisse cette partie du code
    //Vérifier pour les liaisons à l'aide des clées primaires/secondaires

    // res.status(201).json({ message: 'Table "Money" créé !' });

    const money = await Money.create({
      civility: req.body.civility,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      money: 0
    });

    // Send a response back to the client
    res.status(201).json({ message: 'User created successfully'});

  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l’utilisateur.' });
  }
});

module.exports = router;
