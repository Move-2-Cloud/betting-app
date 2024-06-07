import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignupForm from './components/Register/SignupForm';
import LoginForm from './components/Login/LoginForm';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import MoneyDeposit from './components/Deposit/Deposit';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/deposit" element={<MoneyDeposit />} />
            {/* Ajoutez d'autres itinéraires ici si nécessaire */}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
