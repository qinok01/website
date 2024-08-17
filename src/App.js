import React, { Children, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Intro from './pages/Intro';

function App() {
  /*
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsIntroComplete(true);
  };
  */
  return (
    <div>
      {/*!isIntroComplete && <Intro onAnimationComplete={handleAnimationComplete}>  <Home /></Intro>*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
