import React, { useState } from 'react';
import './About.css';
import { FaPython, FaJs, FaDatabase, FaReact, FaChartBar, FaCamera, FaCheckCircle } from 'react-icons/fa';  
import { SiOpencv, SiTensorflow, SiPytorch } from 'react-icons/si';  

const About = () => {
  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store the modal content
  const [modalContent, setModalContent] = useState('');

  // Open the modal with the specific content
  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div className="about-container">
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3>Machine Learning Intern</h3>
          <p><strong>Current</strong> | <strong>Bizamica</strong> | <em>Pune, India</em></p>
          
          <ul className="experience-list">
            {/* Work details are hidden, will be shown in the modal */}
          </ul>
          
          {/* Show More button */}
          <button className="show-more-btn" onClick={() => handleOpenModal('machineLearningIntern')}>
            See Work
          </button>
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <h3>Experience Details</h3>
            <ul>
              {modalContent === 'machineLearningIntern' && (
                <>
                  <li><FaCheckCircle className="check-circle" /> Developed and deployed machine learning models for computer vision using TensorFlow, PyTorch, and OpenCV.</li>
                  <li><FaCheckCircle className="check-circle" /> Worked with large language models (LLM) for text analysis and NLP tasks.</li>
                  <li><FaCheckCircle className="check-circle" /> Contributed to both frontend and backend development using Angular, Django, and Flask for full-stack application development.</li>
                 
                  <li><FaCheckCircle className="check-circle" /> Contributed to both frontend and backend development using Angular, Django, and Flask for full-stack application development.</li>
                  
                  <li><strong>Tech Stack:</strong> Python, OpenCV, TensorFlow, PyTorch, Angular, Django, Flask, scikit-learn, Pandas, NumPy.</li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Skills section remains unchanged */}
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skills-grid">
            <div className="skill-card">
              <FaPython className="skill-icon" />
              <h4>Programming Languages</h4>
              <p>Python (Advanced), C++, JavaScript</p>
            </div>
            <div className="skill-card">
              <SiPytorch className="skill-icon" />
              <h4>Data Science & ML</h4>
              <p>scikit-learn, SciPy, TensorFlow, PyTorch, NumPy, Langchain, Pandas</p>
            </div>
            <div className="skill-card">
              <SiOpencv className="skill-icon" />
              <h4>Computer Vision</h4>
              <p>OpenCV, YOLO, OCR</p>
            </div>
            <div className="skill-card">
              <SiTensorflow className="skill-icon" />
              <h4>Machine Learning</h4>
              <p>Supervised/Unsupervised Learning, Neural Networks, Deep Learning, Transformer Models</p>
            </div>
            <div className="skill-card">
              <FaChartBar className="skill-icon" />
              <h4>Data Visualization</h4>
              <p>Matplotlib, Seaborn</p>
            </div>
            <div className="skill-card">
              <FaReact className="skill-icon" />
              <h4>Web Development</h4>
              <p>HTML, CSS, React, Node.js, Django, ExpressJS</p>
            </div>
            <div className="skill-card">
              <FaDatabase className="skill-icon" />
              <h4>Databases</h4>
              <p>SQL</p>
            </div>
            <div className="skill-card">
              <FaCamera className="skill-icon" />
              <h4>Computer Vision</h4>
              <p>OpenCV, YOLO, OCR</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
