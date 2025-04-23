import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import About from './pages/About';
import AboutMe from './pages/About-me';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
// import other pages as you build them

const App: React.FC = () => {
  return (
   
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<AboutMe/>} />
        {/* <Route path="/projects" element={<div>Projects</div>} /> */}
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>

  );
};

export default App;
