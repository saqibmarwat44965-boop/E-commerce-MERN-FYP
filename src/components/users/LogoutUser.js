import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutUser = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    // Redirect to the login page
    navigate('/loginuser');
  };

  return (
    <button onClick={handleLogout} className='logout-user-button'>Logout</button>
  );
};

export default LogoutUser;