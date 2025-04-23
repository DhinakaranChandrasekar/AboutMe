import React from 'react';
import './pages.css';

const About: React.FC = () => {
  const lines = [
    {
      text: "Hi, I'm DhinaKaran",
      highlightIndices: [8, 13] // D & K
    },
    {
      text: "Web Developer & Data Scientist",
      highlightIndices: [0, 4, 16, 21] // W, D, D, S
    }
  ];

  return (
    <div className="about-container">
      {lines.map((line, lineIndex) => (
        <h1 key={lineIndex} className="animated-line">
          {line.text.split('').map((char, charIndex) => {
            const isHighlight = line.highlightIndices.includes(charIndex);
            return (
              <span
                key={charIndex}
                className={`letter ${isHighlight ? 'highlight' : ''}`}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </h1>
      ))}
    </div>
  );
};

export default About;
