import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Project.css';

const Project = () => {
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    beforeChange: (current, next) => {
      const slider = sliderRef.current;
      const lastIndex = slider.props.children.length - 1;
      setIsPrevDisabled(next === 0);
      setIsNextDisabled(next === lastIndex);
    },
  };

  return (
    <div className="project-container">
      <h2>Projects</h2>
      <Slider {...sliderSettings} ref={sliderRef}>
        <div className="project-card">
          <h3>Image Processing</h3>
          <p className="project-location">Pune, India</p>
          <p className="project-duration">Oct 2021 - Dec 2023</p>
          <ul className="project-details">
            <li>Developed an image processing project leveraging machine learning techniques.</li>
            <li><strong>Tech:</strong> Python, OpenCV, TensorFlow</li>
          </ul>
          <Link to="/project/image-processing">
            <button className="project-button">See Full Project</button>
          </Link>
        </div>

        <div className="project-card">
          <h3>Image OCR Text Extraction</h3>
          <p className="project-location">Pune, India</p>
          <p className="project-duration">Oct 2021 - Dec 2023</p>
          <ul className="project-details">
            <li>Created a system to extract text from images using Optical Character Recognition (OCR).</li>
            <li><strong>Tech:</strong> Python, Tesseract, OpenCV</li>
          </ul>
          <Link to="/project/ocr-text-extraction">
            <button className="project-button">See Full Project</button>
          </Link>
        </div>

        <div className="project-card">
          <h3>Cardiovascular Risk Assessor</h3>
          <p className="project-location">Pune, India</p>
          <p className="project-duration">Oct 2021 - Dec 2023</p>
          <ul className="project-details">
            <li>Developed ML model for cardiovascular risk assessment using supervised learning techniques.</li>
            <li>Implemented user interface for data input and result visualization.</li>
            <li><strong>Tech:</strong> Python, scikit-learn, Pandas, Seaborn, Ensemble Learning</li>
          </ul>
          <Link to="/project/cardiovascular-risk-assessor">
            <button className="project-button">See Full Project</button>
          </Link>
        </div>

        <div className="project-card">
          <h3>College Event Management System</h3>
          <p className="project-location">Pune, India</p>
          <p className="project-duration">Oct 2021 - Dec 2023</p>
          <ul className="project-details">
            <li>Designed and implemented a web application for managing college events.</li>
            <li>Integrated database management system for efficient data handling.</li>
            <li><strong>Tech:</strong> JavaScript, Node.js, Express.js, HTML, CSS, MySQL</li>
          </ul>
          <Link to="/project/college-event-management-system">
            <button className="project-button">See Full Project</button>
          </Link>
        </div>
      </Slider>
     
    </div>
  );
};

export default Project;
