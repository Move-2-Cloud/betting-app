const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
/*const Money = require('./models/Money'); */

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé.' });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Mot de passe incorrect.' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const userData = {
      id: user.id,
      civility: user.civility,
      firstName: user.firstName,
      lastName: user.lastName,
      birthdate: user.birthdate,
      country: user.country,
      city: user.city,
      adress: user.adress,
      zipcode: user.zipcode,
      email: user.email
    };

    res.json({ token, userData });
  } catch (error) {
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});


router.post('/api/deposit', async (req, res) => {
  try {
    const { civility, firstName, lastName, email } = req.body;

    // Vérifiez si l'utilisateur existe dans votre base de données
    const existingUser = await Money.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    // Ajoutez 100€ au solde
    await existingUser.increment('money', { by: 100 });

    // Renvoyez le nouvel objet Money avec le solde mis à jour
    const updatedUser = await Money.findOne({ where: { email } });

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors du dépôt.' });
  }
});

module.exports = router;
