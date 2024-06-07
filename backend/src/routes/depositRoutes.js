const express = require('express');
const User = require('../models/User');
/*const Money = require('./models/Money');*/

const router = express.Router();


router.post('/deposit', async (req, res) => {
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
