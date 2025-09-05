
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">𝐄𝐯𝐞𝐧𝐭𝐏𝐥𝐚𝐧</div>

      <ul className="nav-links">
        <li><Link to="/home"><b>Home</b></Link></li>
        <li><Link to="/about"><b>About</b></Link></li>
        <li><Link to="/services"><b>Services</b></Link></li>
        <li><Link to="/contact"><b>Contact</b></Link></li>
        
        {name && <li className="welcome-user">Hi, <b>{name}</b></li>}

        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;

