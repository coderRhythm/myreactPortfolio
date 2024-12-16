import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path as needed
import Home from './components/Home'; // Ensure this component exists
import About from './components/About'; // Ensure this component exists
import Project from './components/Project'; // Ensure this component exists
import ProjectDetails from './components/ProjectDetails'; // Import your ProjectDetails component
import Contact from './components/ContactForm'; // Make sure you have this component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar is displayed on all pages */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/projects" element={<Project />} /> 
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          
          
          <Route path="/project/:id" element={<ProjectDetails />} /> {/* Project details */}
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
