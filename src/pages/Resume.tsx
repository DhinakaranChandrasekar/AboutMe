import React, { useEffect, useState } from 'react';
import './pages.css';

const Resume: React.FC = () => {
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setZoom(isMobile ? 70 : 100);
  }, []);

  return (
    <div className="resume-container">
      <iframe
        src={`${process.env.PUBLIC_URL}/Dhinakaran_Chandrasekar_CV.pdf#zoom=${zoom}`}
        title="DhinaKaran Resume"
        className="resume-frame"
      ></iframe>
    </div>
  );
};

export default Resume;
