import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Nav';
import Platforms from './Components/Platforms';
import Content from './Components/content';
import Cursor from './Components/cursor';
import About from './Components/about';
import Resume from './Components/resume';
import Projects from './Components/projects';
import LetsTalk from './Components/letstalk';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    {/* Home Route */}
    <Route
      path="/"
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
      path="/about"
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
    <Route
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
    />
    {/* Projects Route */}
    <Route
      path="/projects"
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
      path="/letstalk"
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
  document.body.style.backgroundColor = '#ECDFCC';
  // document.body.style.overflow = 'hidden';
  return (
    <Router>
      <Navbar />
      <Platforms />
      <Cursor />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;