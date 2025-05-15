import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import About from './pages/About';
import AboutMe from './pages/About-me';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
// import other pages as you build them

const App: React.FC = () => {
  return (
   
    <Router>
      <Header />
      <Routes>
        <Route path="/AboutMe/" element={<About />} />
        <Route path="/AboutMe/about" element={<AboutMe/>} />
        <Route path="/AboutMe/projects" element={<Projects/>} />
        <Route path="/AboutMe/resume" element={<Resume/>} />
        <Route path="/AboutMe/contact" element={<Contact/>} />
      </Routes>
    </Router>

  );
};

export default App;
