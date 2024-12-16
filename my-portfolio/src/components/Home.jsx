import React from 'react';
import './home.css';
import profileImage from '../assets/profile_image.png';

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-container">
          <div className="left-container">
            <h1 className="greeting">Namaste and Jai Jinendra,</h1>
            <h1>Hello, I'm</h1>
            <div className="name-highlight">Rhythm Sethiya</div>
            <p className="intro-text">
              A passionate <strong>computer engineer skilled in front-end, back-end, and AI/ML</strong> technologies,
              focused on delivering <strong>innovative software solutions</strong>. I blend creativity with technology
              to craft impactful digital experiences.
            </p>
          </div>

          {/* Right Section */}
          <div className="right-container">
            <figure>
              <img src={profileImage} alt="Profile" className="profile-image" />
              <figcaption>
                <h2 className="profile-name">Rhythm Sethiya</h2>
                <p className="profile-tagline">Future Software Engineer</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-section">
        <div className="portfolio-container">
          <h3>Welcome to My Portfolio</h3>
          <p>
            I’m a <strong>developer</strong> skilled in <strong>web technologies</strong> and <strong>computer science</strong>.
          </p>
          <p>
            Explore my projects and journey in tech—whether it’s building websites, optimizing code, or tackling challenges,
            I’m always eager to grow.
          </p>
          <p className="cta-text">
            Let’s connect and create extraordinary solutions together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
