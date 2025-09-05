import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-section about">
      <h3>About Us</h3>
      <p>We organize unforgettable events—from birthdays to weddings to corporate celebrations—with love, style, and perfection.</p>
    </div>

    <div className="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>

    <div className="footer-section contact">
      <h3>Contact Info</h3>
      <p>Email: info@eventplan.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Location: Hyderabad, India</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Eventplans. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
