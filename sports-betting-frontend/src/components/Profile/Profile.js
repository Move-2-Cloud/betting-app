import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Profile.css';

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Données personnelles</h1>

    
      <div class="profile-card">
          <div class="profile-image"></div>
          <div class="profile-info">
              <p><span>Civilité:</span> {user.civility}</p>
              <p><span>Nom:</span>  {user.lastName}</p>
              <p><span>Prénom:</span> {user.firstName}</p>
              <p><span>Email:</span> {user.email}</p>
              <p><span>Date de Naissance:</span>{user.birthdate}</p>
              <p><span>Ville de Naissance:</span>{user.city}</p>
              <p><span>Adresse:</span> {user.adress}</p>
              <p><span>Code Postal:</span> {user.zipcode}</p>
              <p><span>Ville:</span> {user.city} </p>
              <p><span>Téléphone:</span> 01 23 45 67 89</p>
          </div>
          </div>
      </div>

  );
}

export default Profile;
