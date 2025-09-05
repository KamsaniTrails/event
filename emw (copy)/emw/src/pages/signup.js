
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
// import eventVideo from '../assets/event.mp4';
import eventVideo from "../assets/E.mp4";

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' ,    role: 'customer'});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Clicked Signup!");

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        const role=data.role
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', form.name);
         localStorage.setItem('userRole', form.role);
        alert(data.message || 'Account created successfully!');
        if(role=='admin'){
          navigate("/admin/dashboard");
        }
        else{
          navigate('/home');
        }
        
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="signup-container">
      <div className="video-side">
        <video autoPlay muted loop className="video-bg">
          <source src={eventVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="form-side">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        <select name="role" onChange={handleChange}>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
          <button type="submit">Create Account</button>
          <p>
            Already have an account? <Link to="/login">Login here</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;


