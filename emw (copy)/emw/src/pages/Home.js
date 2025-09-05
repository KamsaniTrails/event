import React, {useState}from 'react';
import './home.css';
import Footer from "../components/Footer";


import img2 from '../assets/ev2.webp';
import img3 from '../assets/ev3.jpeg';
import weddingImg from "../assets/wed.jpeg";
import birthdayImg from "../assets/birth.jpeg";
import festivalImg from "../assets/fest.avif";
import graduationImg from "../assets/grad.jpeg";
import corporateImg from "../assets/cor.jpg";
const Home = () => {
  const name = localStorage.getItem("username");
  const email = localStorage.getItem("email");
    const [showMore, setShowMore] = useState(false);
      const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  

const handleSubmit = (e) => {
  e.preventDefault();
 alert("✅ Confirmed your booking");
      setFormData({
      name: "",
      email: "",
      message: ""
    });
};


  const toggleShow = () => {
    setShowAll(!showAll);
  };


const handleBookNow = (packageType) => {
  console.log("Sending booking:", formData); 

  fetch("http://localhost:5000/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      packageType,
      user: {
        name: name,
        email:email,
      }
    })
  })
    .then((res) => res.json())
    .then((data) => {
      alert(`✅ Booking confirmed for ${packageType}`);
      setFormData({ name: "", email: "", message: "" }); 
    })
    .catch((err) => {
      console.error("❌ Booking failed:", err);
      alert("❌ Booking failed");
    });
};


  return (
    <div>
      {/* hero page */}
    <div className="home-container">
      <div className="text-side">
        <h1>Welcome to EventPlan</h1>
        <p>Plan and experience unforgettable events with our professional team.</p>
        <p>From weddings to corporate gatherings — we've got you covered.</p>
      </div>

      <div className="image-side">
        
        <div className="magic-drizzle">
  {[...Array(20)].map((_, i) => (
    <div key={i} className="drizzle-item">
      {["🌸", "💫", "❄️", "✨", "🍃", "🎀"][Math.floor(Math.random() * 6)]}
    </div>
  ))}
</div>


<div className="animated-images">
        {/* <img src={img1} alt="event1" className="img1" /> */}
        <img src={img2} alt="event2" className="img2" />
        <img src={img3} alt="event3" className="img3" />
        </div>
            <div className="circle-animation">
  <span className="circle circle1"></span>
  <span className="circle circle2"></span>
  <span className="circle circle3"></span>
</div>
        <div className="curly-line-container">
  <svg viewBox="0 0 200 20" className="curly-line">
    <path
      d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
      stroke="#8884d8"
      strokeWidth="2"
      fill="transparent"
    />
  </svg>
</div>
    

    {/* services */}
      </div>
      <div></div>
    </div>
   <div className="home-categories">
    <h3 style={{ color: 'blue' }}>𝓗𝓮𝓵𝓵𝓸 𝓽𝓱𝓮𝓻𝓮!</h3>

      <h2>We will give a very special celebration for you</h2>

      <div className="category-list">
        <div className="category-card">
          <img src={weddingImg} alt="Wedding" />
          <h3>Weddings</h3>
          <p>Elegant and memorable weddings planned just for you.</p>
        </div>

        <div className="category-card">
          <img src={birthdayImg} alt="Birthday" />
          <h3>Birthday Parties</h3>
          <p>Fun-filled birthday bashes for all ages!</p>
        </div>

        <div className="category-card">
          <img src={festivalImg} alt="Festival" />
          <h3>Festivals</h3>
          <p>Celebrate every tradition with joy and color.</p>
        </div>

        {showMore && (
          <>
            <div className="category-card">
              <img src={graduationImg} alt="Graduation" />
              <h3>Graduation</h3>
              <p>Cherish your academic success in style.</p>
            </div>

            <div className="category-card">
              <img src={corporateImg} alt="Corporate Events" />
              <h3>Corporate Events</h3>
              <p>Professional and classy event solutions.</p>
            </div>
          </>
        )}
      </div>

      <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'See Less' : 'See More'}
      </button>
    </div>

   {/* other services */}
<div className="home-services">
  <h2>We Also Provide</h2>
  <div className="services-grid">
    <div className="service-item">
      <span className="icon">🏛️</span>
      <h3>Venue Selection</h3>
      <p>Find the perfect venue for your event based on your theme and guest count.</p>
    </div>

    <div className="service-item">
      <span className="icon">💐</span>
      <h3>Flower Bouquets</h3>
      <p>Fresh and customized floral arrangements for all kinds of events.</p>
    </div>

    <div className="service-item">
      <span className="icon">📄</span>
      <h3>Documentation</h3>
      <p>We handle permissions, contracts, and event-related legal documents.</p>
    </div>

    <div className="service-item">
      <span className="icon">💌</span>
      <h3>Invitation Cards</h3>
      <p>Design and print beautiful digital or paper invites as per your theme.</p>
    </div>

    <div className="service-item">
      <span className="icon">🎉</span>
      <h3>Entertainment</h3>
      <p>Book dancers, musicians, anchors, or artists to keep your guests entertained.</p>
    </div>

    <div className="service-item">
      <span className="icon">🎀</span>
      <h3>Decorations</h3>
      <p>From minimalist to royal, we offer decoration services to suit your vision.</p>
    </div>
  </div>
</div>


{/* looking special */}
<div className="looking-special">
  <div className="special-left">
    <h2>Looking Special?</h2>
    <p>
      Make your party truly unforgettable! We provide premium decorations,
      lighting, customized themes, and VIP arrangements just at
      <strong> $735/party</strong>.
    </p>
    <button className="book-now-btn" onClick={()=>handleBookNow('Birthday')}>Book Now</button>
  </div>

  <div className="special-right">
    <img src={require('../assets/cor.jpg')} alt="Special Party 1" />
    <img src={require('../assets/fest.avif')} alt="Special Party 2" />
  </div>
</div>


 {/* Packages */}
 <div className="event-package">
      <h3 style={{ color: 'purple' }}>𝓒𝓱𝓸𝓸𝓼𝓮 𝔂𝓸𝓾𝓻 𝓽𝓲𝓶𝓮</h3>
      <h2>Our Event Packages</h2>

      <div className="package-cards">
        {/* Always visible cards */}
        <div className="package-card">
          <h4>🎉 Birthday Party</h4>
          <p><strong>Price:</strong> $239</p>
          <p><strong>Duration:</strong> 5 Hours</p>
          <p><strong>Guests:</strong> Up to 10 Persons</p>
          <ul>
            <li>🎈 Decoration</li>
            <li>🍽️ Catering</li>
            <li>🎂 Custom Cake</li>
            <li>🎶 Music & Games</li>
          </ul>
          <button className="book-btn" onClick={() => handleBookNow('Birthday')}>Book Now</button>
        </div>

        <div className="package-card">
          <h4>💍 Wedding</h4>
          <p><strong>Price:</strong> $1099</p>
          <p><strong>Duration:</strong> Full Day</p>
          <p><strong>Guests:</strong> Up to 200 Persons</p>
          <ul>
            <li>🌸 Venue & Stage Setup</li>
            <li>📷 Photography</li>
            <li>🍽️ Full-course Catering</li>
            <li>🎵 Live Music</li>
          </ul>
          <button className="book-btn" onClick={() => handleBookNow('Wedding')}>Book Now</button>
        </div>

        {/* Hidden cards toggle */}
        {showAll && (
          <>
            <div className="package-card">
              <h4>🎭 Festival</h4>
              <p><strong>Price:</strong> $649</p>
              <p><strong>Duration:</strong> 6 Hours</p>
              <p><strong>Guests:</strong> Up to 100 Persons</p>
              <ul>
                <li>🎊 Traditional Decor</li>
                <li>🥁 Cultural Programs</li>
                <li>🍴 Festival Foods</li>
                <li>🪔 Lighting Setup</li>
              </ul>
              <button className="book-btn" onClick={() => handleBookNow('Festival')}>Book Now</button>
            </div>

            <div className="package-card">
              <h4>🎓 Graduation</h4>
              <p><strong>Price:</strong> $399</p>
              <p><strong>Duration:</strong> 4 Hours</p>
              <p><strong>Guests:</strong> Up to 50 Persons</p>
              <ul>
                <li>🎤 Stage & Mic Setup</li>
                <li>📸 Group Photos</li>
                <li>🥳 Celebration Decor</li>
                <li>🍕 Light Snacks</li>
              </ul>
              <button className="book-btn"onClick={() => handleBookNow('Graduation')}>Book Now</button>
            </div>

            <div className="package-card">
              <h4>🏢 Corporate Event</h4>
              <p><strong>Price:</strong> $899</p>
              <p><strong>Duration:</strong> 8 Hours</p>
              <p><strong>Guests:</strong> Up to 150 Persons</p>
              <ul>
                <li>🪑 Conference Setup</li>
                <li>🎤 Projector & Audio</li>
                <li>☕ Refreshments</li>
                <li>📋 Agenda Coordination</li>
              </ul>
              <button className="book-btn"onClick={() => handleBookNow('Corporate')}>Book Now</button>
            </div>
          </>
        )}
      </div>

      {/* Toggle Button */}
      <button onClick={toggleShow} className="btn">
        {showAll ? 'See Less' : 'See More'}
      </button>
    </div>




  {/* People say */}
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








<form className="dream-form" onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name"
    className="animated-input delay-1"
    required
  />
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Your Email"
    className="animated-input delay-2"
    required
  />
  <textarea
    name="message"
    rows="5"
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    className="animated-input delay-3"
    required
  ></textarea>
  <button type="submit" className="animated-input delay-5">
    Leave Message
  </button>
</form>



 {/* Footer */}
<Footer />


</div>
  );
};

export default Home;



