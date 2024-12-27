import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./home.css";
import profileImage from "../assets/profile_image.png";

const Home = () => {
  // Framer Motion animation variants for advanced effects
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3, // Delay for child animations
        staggerChildren: 0.2, // Time between animations of child elements
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 }, // Slide-in from the left
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 }, // Slide-in from the right
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div class = "BigHome">
      <div className="home">
        <motion.div
          className="home-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Right Section */}
          <motion.div className="right-container" variants={rightItemVariants}>
            <figure>
              <img src={profileImage} alt="Profile" className="profile-image" />
              <figcaption>
                <h2 className="profile-name">Rhythm Sethiya</h2>
                <p className="profile-tagline">Future Software Engineer</p>
              </figcaption>
            </figure>
          </motion.div>

          {/* Left Section */}
          <motion.div className="left-container" variants={itemVariants}>
            <h1 className="greeting">Namaste and Jai Jinendra,</h1>
            <h1>Hello, I'm</h1>
            <div className="name-highlight">Rhythm Sethiya</div>
            <p className="intro-text">
              A passionate <strong>computer engineer skilled in front-end, back-end, and AI/ML</strong> technologies,
              focused on delivering <strong>innovative software solutions</strong>. I blend creativity with technology
              to craft impactful digital experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Portfolio Section */}
      <motion.div
        className="portfolio-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="portfolio-container">
          <motion.h3 variants={itemVariants}>Welcome to My Portfolio</motion.h3>
          <motion.p variants={itemVariants}>
            I’m a <strong>developer</strong> skilled in <strong>web technologies</strong> and <strong>computer science</strong>.
          </motion.p>
          <motion.p variants={itemVariants}>
            Explore my projects and journey in tech—whether it’s building websites, optimizing code, or tackling challenges,
            I’m always eager to grow.
          </motion.p>
          <motion.p className="cta-text" variants={itemVariants}>
            Let’s connect and create extraordinary solutions together!
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
