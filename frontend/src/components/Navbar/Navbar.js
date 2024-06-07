import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {user ? (
        <div className="user-info">
          <Link to="/deposit">Déposer</Link>
          <span onClick={() => setShowDropdown(!showDropdown)}>{user.email}</span>
          
          {showDropdown && (
            <div className="dropdown-content">
              <Link className="dropdown-link" to="/profile">Profil</Link>
              <a href="#!" className="logout-button" onClick={handleLogout}>Déconnexion</a>
            </div>
          )}
           
        </div>
        
      ) : (
        <div className="auth-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
