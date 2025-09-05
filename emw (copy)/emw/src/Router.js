import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from './pages/signup';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AdminPanel from "./components/AdminPanel";
import Dashboard  from  "./components/Dashboard";
import AllBooks from "./components/allbookings";
import Contacts from "./components/allcontact";

const Router = () => {
  const role = localStorage.getItem("userRole");

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* Admin-only route */}
      <Route
  path="/admin/dashboard"
  element={role === 'admin' ? <Dashboard /> : <Navigate to="/login" />}
/>
<Route
  path="/admin/bookings"
  element={role === 'admin' ? <AllBooks /> : <Navigate to="/login" />}
/>
<Route
  path="/admin/contacts"
  element={role === 'admin' ? <Contacts /> : <Navigate to="/login" />}
/>
    </Routes>
  );
};

export default Router;
