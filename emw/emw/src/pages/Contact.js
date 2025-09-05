import React, { useState } from 'react';
import Footer from "../components/Footer";
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message. Try again later.');
    }
  };

  return (
    <div>
      <div className="ur-dreams">
        <h3 style={{ color: 'blue' }}>𝓖𝓮𝓽 𝓲𝓷 𝓣𝓸𝓾𝓬𝓱</h3>
        <h2>Contact Us - Let's Make Your Event Unforgettable!</h2>
        <p>
          We're here to bring your dreams to life. Whether it's a wedding, birthday party,
          corporate gathering, or festival, our team is ready to plan and execute your event to perfection.
        </p>

        <h2>📍 Our Office</h2>
        <h3>EventPlann Headquarters</h3>
        <p>123 Celebration Street, Jubilee Hills, Hyderabad, Telangana-500033, India</p>

        <h3>📞 Reach Out to Us</h3>
        <p>Phone: +91 98765 43210</p>
        <p>Email: contact@eventplan.com</p>
        <p>WhatsApp: +91 98765 43210</p>
        <p>Instagram: @eventplan.in</p>
        <p>Facebook: facebook.com/eventplan</p>

        <h3> 🕒 Working Hours</h3>
        <p>Monday to Saturday: 9:00 AM - 8:00 PM</p>
        <p>Sunday: By Appointment Only</p>

        <h2>Send Us a Message</h2>
        <form className="dream-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="animated-input delay-1"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="animated-input delay-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="animated-input delay-3"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="animated-input delay-5">Leave Message</button>
        </form>
        {status && <p style={{ color: 'green', marginTop: '10px' }}>{status}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
