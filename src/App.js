import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import Platforms from "./Components/Platforms";
import Content from "./Components/Content";
import Cursor from "./Components/Cursor";
import About from "./Components/About/About";
import Projects from "./Components/Project";
import LetsTalk from "./Components/LetsTalk";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { WebModeProvider } from "./Components/WebModeContext";

function AnimatedRoutes() {
  const location = useLocation();
  const pageTransition = {
    initial: { x: "100vw" },
    animate: { x: 0 },
    exit: { x: "-100vw" },
    transition: { type: "spring", stiffness: 200, duration: 0.01 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/Purvish_Portfolio" element={<motion.div {...pageTransition}><Content /></motion.div>} />
        <Route path="/Purvish_Portfolio/about" element={<motion.div {...pageTransition}><About /></motion.div>} />
        <Route path="/Purvish_Portfolio/projects" element={<motion.div {...pageTransition}><Projects /></motion.div>} />
        <Route path="/Purvish_Portfolio/LetsTalk" element={<motion.div {...pageTransition}><LetsTalk /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <WebModeProvider>
      <Router>
        <Navbar />
        <Platforms />
        <Cursor />
        <AnimatedRoutes />
      </Router>
    </WebModeProvider>
  );
}

export default App;
