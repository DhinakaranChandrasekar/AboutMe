import React from 'react';
import './pages.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <iframe
        src="/DhinaKaran_Chandrasekar_CV.pdf#zoom=100"
        title="DhinaKaran Resume"
        className="resume-frame"
      ></iframe>
    </div>
  );
};

export default Resume;
