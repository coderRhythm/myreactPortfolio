import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import imageProcessing from '../assets/imageProcessing.png';
import ocrExtraction from '../assets/ocrExtraction.png';
import cardiovascularRiskAssessor from '../assets/heartDeseasePrediction.png';
import collegeEventManagement from '../assets/collegeEventManagement.png';

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = {
    "image-processing": {
      title: "Image Processing",
      location: "Pune, India",
      duration: "Oct 2021 - Dec 2023",
      description: "Developed an image processing project leveraging machine learning techniques.",
      tech: "Python, OpenCV, TensorFlow",
      details: "This project involved preprocessing images, including noise removal and grayscale conversion.",
      image: imageProcessing,
      github: "https://github.com/coderRhythm/imageProcessing"
    },
    "ocr-text-extraction": {
      title: "Image OCR Text Extraction",
      location: "Pune, India",
      duration: "Oct 2021 - Dec 2023",
      description: "Created a system to extract text from images using Optical Character Recognition (OCR).",
      tech: "Python, Tesseract, OpenCV",
      details: "We used Tesseract OCR to extract text from scanned documents and images.",
      image: ocrExtraction,
      github: "https://github.com/coderRhythm/Text_extraction_project"
    },
    "cardiovascular-risk-assessor": {
      title: "Cardiovascular Risk Assessor",
      location: "Pune, India",
      duration: "Oct 2021 - Dec 2023",
      description: "Developed a machine learning model for cardiovascular risk assessment.",
      tech: "Python, scikit-learn, Pandas, Seaborn, Ensemble Learning",
      details: "This project uses supervised learning techniques to assess cardiovascular risk based on user input data.",
      image: cardiovascularRiskAssessor,
      github: "https://github.com/coderRhythm/Cardiovascular_system"
    },
    "college-event-management-system": {
      title: "College Event Management System",
      location: "Pune, India",
      duration: "Oct 2021 - Dec 2023",
      description: "Developed a web application to manage college events.",
      tech: "JavaScript, Node.js, Express.js, HTML, CSS, MySQL",
      details: "The system allows event organizers to create events and students to register, with a database backend.",
      image: collegeEventManagement,
      github: "https://github.com/coderRhythm/college_event"
    }
  };

  const project = projects[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <h2 className="project-title">{project.title}</h2>

      <div className="project-header">
        <p><strong>Location:</strong> {project.location}</p>
        <p><strong>Duration:</strong> {project.duration}</p>
      </div>

      <div className="project-content">
        {/* Project Image */}
        <div className="project-image-container">
          <img src={project.image} alt={project.title} className="project-image" />
        </div>

        {/* Project Description */}
        <div className="project-description-container">
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Technologies Used:</strong> {project.tech}</p>
          <p><strong>Details:</strong> {project.details}</p>
        </div>
      </div>

      {/* GitHub Link */}
      <div className="github-link">
        <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      {/* Back button */}
      <button onClick={() => window.history.back()} className="back-button">Back</button>
    </div>
  );
};

export default ProjectDetails;
