import React from 'react';
import './pages.css';
import TerminalTyping from '../Components/TerminalTyping';

const AboutMe: React.FC = () => {
  const highlightWords = ['DhinaKaran', 'iOL'];

  const paragraph = `Hey there! I’m DhinaKaran — part-time bug squasher, full-time developer, and a data nerd at heart. I’ve wrapped up my Master’s in Data Science and now I’m building cool things at iOL as a Developer. Whether it's fullstack magic, automating the boring stuff, or turning messy data into clean insights, I’m all about it. Outside work, you’ll probably find me experimenting with side projects, leveling up my dev game, or planning my next creative venture. Tech is my playground — and I’m just getting started.`;

  const renderParagraph = () => {
    return paragraph.split(' ').map((word, wordIndex) => {
      const plainWord = word.replace(/[^a-zA-Z]/g, '');
      const isHighlight = highlightWords.includes(plainWord);
      const className = isHighlight ? 'highlight word' : 'word';
  
      return (
        <span key={wordIndex} className={className}>
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} className="letter">
              {char}
            </span>
          ))}{' '}
        </span>
      );
    });
  };
  

  return (
    <div className="aboutme-container">
      <div className="aboutme-text">
        <p>{renderParagraph()}</p>
      </div>

      <div className="aboutme-coolstuff">
  <div className="ghibli-container">
    <TerminalTyping />
    <img src="/Ghibli.png" alt="Ghibli-style Me" className="ghibli-img" />
  </div>
</div>
    </div>
  );
};

export default AboutMe;
