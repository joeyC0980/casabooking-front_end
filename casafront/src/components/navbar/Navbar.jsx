import React from 'react';
import "./navbar.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };



  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Casabooking</span>
        </Link>
        <div  className="navItems">
        {user ? user.username : null}         
          </div>      
      </div>
      {user && (
        <button className="logoutBtn" onClick={handleLogout}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default Navbar;


