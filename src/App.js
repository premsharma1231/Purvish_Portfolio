import React, { useEffect, useRef, useState } from "react";
import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import Platforms from './Components/Platforms';
import Content from './Components/Content';
import Cursor from './Components/Cursor';
import About from './Components/About/About';
// import Resume from './Components/resume';
import Projects from './Components/Project';
import LetsTalk from './Components/LetsTalk';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import { WebModeProvider } from "./Components/WebModeContext";
// import FooterForAll from './Components/FooterForAll';

function AnimatedRoutes() {
  const location = useLocation();


  return (
    <AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    {/* Home Route */}
    <Route
      path="/Purvish_Portfolio"
      element={
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          transition={{ type: 'spring', stiffness: 200, duration: 0.1 }}
        >
          <Content />
        </motion.div>
      }
    />
    {/* About Route */}
    <Route
      path="/Purvish_Portfolio/about"
      element={
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          transition={{ type: 'spring', stiffness: 200, duration: 0.1 }}
        >
          <About />
        </motion.div>
      }
    />
    {/* Resume Route */}
    {/* <Route
      path="/resume"
      element={
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '100vw' }}
          transition={{ type: 'spring', stiffness: 200, duration: 0.1 }}
        >
          <Resume />
        </motion.div>
      }
    /> */}
    {/* Projects Route */}
    <Route
      path="/Purvish_Portfolio/projects"
      element={
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          transition={{ type: 'spring', stiffness: 200, duration: 0.1 }}
        >
          <Projects />
        </motion.div>
      }
    />
    {/* Let's Talk Route */}
    <Route
      path="/Purvish_Portfolio/LetsTalk"
      element={
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '100vw' }}
          transition={{ type: 'spring', stiffness: 200, duration: 0.1 }}
        >
          <LetsTalk />
        </motion.div>
      }
    />
  </Routes>
</AnimatePresence>
  );
}

function App() {
  document.body.style.overflowX = "none"
  // const [webMode, setWebMode] = useState(() => localStorage.getItem("webMode") || "Light");
  // document.body.style.backgroundColor = webMode === "Light" ? "#ECDFCC" : "#042743";
  return (
    <>
    <WebModeProvider>
        <Router>
        <Navbar />
        <Platforms />
        <Cursor />
        <AnimatedRoutes />
        </Router>
    </WebModeProvider>
    </>
  );
}

export default App;