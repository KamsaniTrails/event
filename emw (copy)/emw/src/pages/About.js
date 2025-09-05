import React from 'react';
import './about.css';
import aboutImg from '../assets/ev1.webp'; 
import team1 from '../assets/per2.jpeg';
import team2 from '../assets/per1.jpeg';
import team3 from '../assets/per3.jpg';
import Footer from "../components/Footer";


const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-text">
          <h1>About EventPlan</h1>
          <p>
            EventPlan is your one-stop destination for organizing stunning, memorable events. Whether it's weddings, birthdays, festivals, or corporate gatherings — we bring your vision to life with creativity, dedication, and flawless execution.
          </p>
        </div>
        <div className="hero-image">
          <img src={aboutImg} alt="About EventPlan" />
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To make every celebration truly unforgettable by blending passion with perfection. We believe in crafting experiences, not just events.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={team1} alt="Team Member" />
            <h4>Prisha Mehta</h4>
            <p>Event Coordinator</p>
          </div>
          <div className="team-card">
            <img src={team2} alt="Team Member" />
            <h4>Arjun Reddy</h4>
            <p>Creative Director</p>
          </div>
          <div className="team-card">
            <img src={team3} alt="Team Member" />
            <h4>Riya Das</h4>
            <p>Logistics Manager</p>
          </div>
        </div>
      </section>

      <section>
        <div className="people-say">
  <h3 style={{ color: 'blue' }}>𝓽𝓮𝓼𝓽𝓲𝓶𝓸𝓷𝓲𝓪𝓵</h3>
  <h2>What people say</h2>
  <div className="testimonial-slider">
    <div className="testimonial-track">
      <div className="testimonial">
        <img src={require('../assets/per1.jpeg')} alt="Priya" />
        <p>"The birthday party was magical! Decorations were amazing."</p>
        <span>– Priy rai</span>
      </div>
      <div className="testimonial">
        <img src={require('../assets/per2.jpeg')} alt="Rahul & Neha" />
        <p>"Our wedding was a dream come true. Everything was perfect!"</p>
        <span>– Rahul & Neha</span>
      </div>
      <div className="testimonial">
        <img src={require('../assets/per3.jpg')} alt="Ananya" />
        <p>"Loved the festive vibes and the cultural programs!"</p>
        <span>– Ananya</span>
      </div>
      <div className="testimonial">
        <img src={require('../assets/per2.jpeg')} alt="Karthik" />
        <p>"Graduation felt truly special with your setup. Thank you!"</p>
        <span>– Karthik</span>
      </div>
      <div className="testimonial">
        <img src={require('../assets/per1.jpeg')} alt="IBM Team" />
        <p>"Professional corporate setup. Very well organized."</p>
        <span>– IBM Team</span>
      </div>
    </div>
  </div>
</div>
      </section>
      <section><Footer /></section>
    </div>
  );
};

export default About;

