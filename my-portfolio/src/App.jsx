import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Navbar from "./components/Navbar"; // Adjust path as needed
import Home from "./components/Home"; // Ensure this component exists
import About from "./components/About"; // Ensure this component exists
import Project from "./components/Project"; // Ensure this component exists
import ProjectDetails from "./components/ProjectDetails"; // Import your ProjectDetails component
import Contact from "./components/ContactForm"; // Make sure you have this component
import { InfinitySpin } from "react-loader-spinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Spinner */}
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            textAlign: "center",
            marginTop: "20%",
            transform: "scale(2)",
            overflow: "hidden",
          }}
        >
          <InfinitySpin width="200" color="#4fa94d" />
        </motion.div>
      ) : (
        <Router>
          <Navbar /> {/* Navbar is displayed on all pages */}
          <AnimatedRoutes />
        </Router>
      )}
    </>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  // 3D-like Parallax Animation Variants
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw", // Start off-screen
      rotateY: 90, // Rotate in 3D
      scale: 0.8, // Shrink effect
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1, // Normal size
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: "100vw", // Exit off-screen
      rotateY: -90, // Rotate out in 3D
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/home"
          element={
            
              <Home />
            
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Project />
            </motion.div>
          }
        />
        <Route
          path="/project/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProjectDetails />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
