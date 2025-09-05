import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import eventVideo from "../assets/E.mp4";

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", data.name);   
        localStorage.setItem("email", data.email); 
        localStorage.setItem("role", data.role);
        alert("Login successful!");
        if(data.role === "admin"){
          navigate("/admin/dashboard");
          // window.location.href="/admin/dashboard";
        }else{
           navigate("/home");
        }
      } else {
       
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="video-side">
        <video autoPlay muted loop className="video-bg">
          <source src={eventVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="form-side">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
