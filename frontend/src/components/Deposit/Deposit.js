import React, { useState } from 'react';
import { API_BASE_URL } from '../../config';

function DepositForm() {
  const [userData, setUserData] = useState({
    civility: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeposit = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/deposit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const updatedUserData = await response.json();
      console.log('Nouveau solde:', updatedUserData.money);
    } catch (error) {
      console.error('Erreur lors du dépôt:', error);
    }
  };

  return (
    <div>
      <h2>Déposer de l'argent fictif</h2>
      <div>
        <label>Civilité:</label>
        <input type="text" name="civility" onChange={handleInputChange} />
      </div>
      <div>
        <label>Prénom:</label>
        <input type="text" name="firstName" onChange={handleInputChange} />
      </div>
      <div>
        <label>Nom de famille:</label>
        <input type="text" name="lastName" onChange={handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleInputChange} />
      </div>
      <button onClick={handleDeposit}>Déposer 100€</button>
    </div>
  );
}

export default DepositForm;
