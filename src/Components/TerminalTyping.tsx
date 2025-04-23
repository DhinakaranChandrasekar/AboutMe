import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './components.css';

const TerminalTyping: React.FC = () => {
  return (
    <div className="terminal-box">
      <code>
        <span className="prompt">&gt; </span>
        <Typewriter
          words={[
            "who am i",
            "Hi, I’m DhinaKaran",
            "developer --fullstack & data scientist",
            "now playing: building cool stuff @ iOL,Dubai"
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </code>
    </div>
  );
};

export default TerminalTyping;
