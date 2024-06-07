require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./src/database');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes'); 
const depositRoutes = require('./src/routes/depositRoutes');
/*const Money = require('./models/Money');*/

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); 

// Route de test
app.get('/', (req, res) => {
  res.send('Sports Betting Backend is running...');
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Une erreur interne est survenue.' });
});





sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
