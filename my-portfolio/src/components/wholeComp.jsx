import React from 'react'
import Home from './Home'; // Ensure this component exists
import About from './About'; // Ensure this component exists
import Project from './Project'; // Ensure this component exists
// import ProjectDetails from './components/ProjectDetails'; // Import your ProjectDetails component
import Contact from './ContactForm'; // Make sure you have this component
// import Navbar from './components/Navbar'; // Adjust path as needed

const wholeComp = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default wholeComp
