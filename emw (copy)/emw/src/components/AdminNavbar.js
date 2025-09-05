// components/AdminNavbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("username");

    const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };
  return (
    <nav className="admin-navbar">
      <h2>Admin Panel</h2>
      <ul>
        <li><a href="/admin/dashboard">Dashboard</a></li>
        <li><a href="/admin/bookings">All Bookings</a></li>
        <li><a href="/admin/contacts">Contacts</a></li>
        {name && <li className="welcome-user">Hi, <b>{name}</b></li>}
        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;

