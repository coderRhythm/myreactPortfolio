import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = () => {
  const allProjects = [
    {
      title: "College Event Management System",
      location: "Pune, India",
      duration: "Oct 2021 - Dec 2023",
      details: [
        "Designed and implemented a web application for managing college events.",
        "Tech: JavaScript, Node.js, Express.js, HTML, CSS, MySQL",
      ],
      link: "/project/college-event-management-system",
    },
    {
      title: "Image Processing",
      location: "Pune, India",
      duration: "Oct 2021 - Dec 2023",
      details: [
        "Developed an image processing project leveraging machine learning techniques.",
        "Tech: Python, OpenCV, TensorFlow",
      ],
      link: "/project/image-processing",
    },
    {
      title: "Image OCR Text Extraction",
      location: "Pune, India",
      duration: "Oct 2021 - Dec 2023",
      details: [
        "Created a system to extract text from images using Optical Character Recognition (OCR).",
        "Tech: Python, Tesseract, OpenCV",
      ],
      link: "/project/ocr-text-extraction",
    },
    {
      title: "Cardiovascular Risk Assessor",
      location: "Pune, India",
      duration: "Oct 2021 - Dec 2023",
      details: [
        "Developed ML model for cardiovascular risk assessment using supervised learning techniques.",
        "Tech: Python, scikit-learn, Pandas, Seaborn, Ensemble Learning",
      ],
      link: "/project/cardiovascular-risk-assessor",
    },
    

  ];

  const [visibleProjects, setVisibleProjects] = useState(2); // Show 3 cards initially

  const showMoreProjects = () => {
    setVisibleProjects(allProjects.length); // Show all cards
  };

  return (
    <div className="project-container">
      <h2>Projects</h2>
      <div className="project-grid">
        {allProjects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3>{project.title}</h3>
            <p className="project-location">{project.location}</p>
            <p className="project-duration">{project.duration}</p>
            <ul className="project-details">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <Link to={project.link}>
              <button className="project-button">See Full Project</button>
            </Link>
          </div>
        ))}
      </div>

      {visibleProjects < allProjects.length && (
        <button className="show-more-button" onClick={showMoreProjects}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Project;
