import React from 'react'
import weddingImg from "../assets/wed.jpeg";
import birthdayImg from "../assets/birth.jpeg";
import festivalImg from "../assets/fest.avif";
import graduationImg from "../assets/grad.jpeg";
import corporateImg from "../assets/cor.jpg";
import Footer from "../components/Footer"
import "../pages/services.css";
const Services = () => {
  return (
    // <div>
      <div className="services-container">
      {/* Wedding Section */}
      <h1>Services</h1>
      <div className="service-section">
        <div className="service-image">
          <img src={weddingImg} alt="Wedding Celebration" />
        </div>
        <div className="service-content">
          
          {/* <h2>Weddings</h2> */}
          <h2>✨ Forever Begins Here 💍</h2>
        <p>💍 A wedding is more than a ceremony — it's the moment where two lives, two stories, and two hearts become one. It’s a celebration of love that’s been nurtured in quiet moments and bold promises. Every smile, every vow, every step down the aisle whispers forever. Because in that one day, a lifetime begins — beautifully, bravely, and endlessly in love. ✨</p>
        <p>💖A wedding is a reflection of the heart — where emotions run deep, and time seems to pause. It's where glances become memories, and every smile holds a promise. Behind the veil and vows lies a simple truth: love is patient, love is kind, and love never gives up. This day is not just about saying "I do" — it's about choosing each other again and again, every single day.</p>
        <p>🌸 Every wedding is a fairytale, written in moments — the brush of fingertips, the sparkle in a tear, the soft echo of “forever.” It’s a day filled with laughter, elegance, and whispers of magic. With each step down the aisle, dreams turn into reality, and two lives merge into one beautiful journey. Because love doesn’t just make a story — it becomes one.</p>
        </div>
      </div>

        {/* birthday parties */}
<div class="container">
    <div class="left">
      <h1>🎉 Celebrate Life's Sweetest Moments🎈</h1>
      <p>Wishing you a day filled with love, laughter, and endless joy.
         May this year bring you closer to your dreams and surround you
         with the people who make your heart smile. You deserve all the
         happiness in the world. 🌟</p>
         <p>Birthdays are milestones worth celebrating in the most joyful way. Whether it's your child's first birthday, your teen's sweet 16, or a fabulous 50th, we turn your vision into a vibrant, unforgettable event.
From customized themes and creative décor to fun-filled games and picture-perfect cakes, we take care of everything — so you just enjoy the magic. 🎉
💫 Let’s plan a party as unique as you are!
      </p>
    </div>
    <div class="right">
      <img src={birthdayImg} alt="Birthday Celebration" />
    </div>
  </div>


        <div className="service-section">
        <div className="service-image">
          <img src={festivalImg} alt="Festive image" />
        </div>
        <div className="service-content">
          {/* <h2>Weddings</h2> */}
          <h2>🎊Celebrate the Joy of Festivals With Us </h2>
<p>From the colorful charm of Holi to the sparkling lights of Diwali, every festival deserves a grand celebration. We bring your festive visions to life with vibrant décor, traditional food, cultural activities, and entertainment that reflects the true essence of the occasion.

🪔 Let’s create memories that shine as bright as the festival lights.</p>
<p>Holi is a vibrant splash of joy that paints our lives with the brightest colors of love and laughter. It's a celebration of unity, friendship, and the arrival of spring. As gulal fills the air and music sets the rhythm of celebration, Holi brings people together, breaking barriers and spreading happiness. Let the colors speak louder than words and turn every moment into a beautiful memory.</p>
        </div>
      </div>

<div class="container">
    <div class="left">
      <h1>🎉 Graduation Celebration</h1>
      <p>Graduation is not just a ceremony; it’s a celebration of hard work, determination, and growth. It marks the end of one incredible chapter and the beginning of a new journey filled with dreams and possibilities. As caps fly in the air and smiles light up every face, we honor the dedication, resilience, and achievements of each graduate. Today, we don’t just celebrate success — we celebrate the promise of a bright future.
      </p>
      <p>
        Behind every graduation gown is a story of late nights, big dreams, and unwavering support. It’s a day that brings pride to families, tears of joy to eyes, and a sense of accomplishment that words can hardly express. As students walk across the stage, they carry not only their certificates but also lessons, memories, and friendships that will last a lifetime. This moment belongs to every heart that dared to believe.
      </p>
    </div>
    <div class="right">
      <img src={graduationImg} alt="Graduation Celebration" />
    </div>
  </div>


        <div className="service-section">
        <div className="service-image">
          <img src={ corporateImg} alt="Corporation Celebration" />
        </div>
        <div className="service-content">
          {/* <h2>Weddings</h2> */}
      <p>
       Celebrations are a reflection of growth, unity, and shared success. As a team, we’ve crossed milestones, faced challenges with resilience, and built a culture of excellence. Today, we pause to appreciate every contribution that brought us here — from the quiet efforts behind the scenes to the breakthroughs that pushed us forward. This celebration is not just about achievements; it’s about people, purpose, and progress. 
      </p>
      <p>
        This anniversary marks more than just another year — it symbolizes our commitment, innovation, and evolution. From humble beginnings to remarkable milestones, our journey has been powered by passion, collaboration, and integrity. As we celebrate this special occasion, we express heartfelt gratitude to our employees, clients, and partners who made this success story possible. Here's to the past, the present, and the promising future ahead!
      </p>

        </div>
      </div>

          <Footer />
    </div>
  )
}

export default Services;
