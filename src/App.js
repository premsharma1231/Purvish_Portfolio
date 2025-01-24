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
        <Route
          path="/"
          element={
            <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '100vw' }}
              transition={{ duration: 0.5 }}
            >
              <Content />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '-100vw' }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/resume"
          element={
            <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '100vw' }}
              transition={{ duration: 0.5 }}
            >
              <Resume />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '-100vw' }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/LetsTalk"
          element={
            <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
              exit={{ x: '100vw' }}
              transition={{ duration: 0.5 }}
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