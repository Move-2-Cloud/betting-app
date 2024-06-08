import React, { useState } from 'react';
import { API_BASE_URL } from '../../config';
import './SignupForm.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    civility: 'Monsieur',
    firstName: '',
    lastName: '',
    birthdate: '',
    country: 'France',
    city: '',
    adress: '',
    zipcode: '',
    email: '',
    password: '',
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert('Vous devez accepter les termes et conditions pour continuer.');
      return;
    }

    fetch(`${API_BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        civility: formData.civility,
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthdate: formData.birthdate,
        country: formData.country,
        city: formData.city,
        adress: formData.adress,
        zipcode:  formData.zipcode,
        email: formData.email,
        password: formData.password,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert('Inscription réussie.');
    })
    .catch(error => {
      console.error('Erreur lors de l\'inscription:', error);
    });
  };

  return (



       
      <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-column">
        <h2 className="form-column-heading">Vos informations personnelles</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="civility">Civilité:</label>
          <select className="form-input" id="civility" name="civility" value={formData.civility} onChange={handleChange}>
            <option value="Monsieur">Monsieur</option>
            <option value="Madame">Madame</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="firstName">Prénom:</label>
          <input className="form-input" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lastName">Nom de famille:</label>
          <input className="form-input" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="form-label">Date de naissance:</label>
          <input className="form-input" type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Pays:</label>
          <select className="form-input" name="country" value={formData.country} onChange={handleChange}>
            <option value="France">France</option>
            <option value="Allemagne">Allemagne</option>
            <option value="Australie">Australie</option>
            
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Ville:</label>
          <input className="form-input" type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Adresse:</label>
          <input className="form-input" type="text" name="adress" value={formData.adress} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Code Postal:</label>
          <input className="form-input" type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} required />
        </div>
   
        {/* Ajoutez d'autres champs ici */}
      </div>

      <div className="form-column">
        <h2 className="form-column-heading">Vos informations de connexion</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email:</label>
          <input className="form-input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Mot de passe:</label>
          <input className="form-input" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group checkbox-group">
        <input type="checkbox" id="acceptTerms" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} />
        <label className="form-label" htmlFor="acceptTerms">Accepter les termes</label>
      </div>

      <button className="submit-button" type="submit">S'inscrire</button>
    </form>



  );
}

export default SignupForm;