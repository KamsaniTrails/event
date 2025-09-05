
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import Router from "./Router";

const App = () => {
  const location = useLocation();
  const hideNavbarOnPaths = ["/login", "/signup", "/admin/login"];
  const shouldShowNavbar = !hideNavbarOnPaths.includes(location.pathname);

  const userRole = localStorage.getItem("userRole"); // 'admin' or 'customer'

  return (
    <div className="App">
      {shouldShowNavbar && (userRole === 'admin' ? <AdminNavbar /> : <Navbar />)}
      <Router />
    </div>
  );
};

export default App;

