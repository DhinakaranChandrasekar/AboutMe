import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import About from "./pages/About";
import AboutMe from "./pages/About-me";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// import other pages as you build them

const App: React.FC = () => {
  return (
    <BrowserRouter
      basename={process.env.NODE_ENV === "production" ? "/AboutMe" : ""}
    >
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback to home for any unknown route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
