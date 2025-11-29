import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import Platforms from "./Components/Platforms";
import Content from "./Components/content";
import Cursor from "./Components/cursor";
import About from "./Components/About/About";
import Projects from "./Components/Project";
import LetsTalk from "./Components/letstalk";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { WebModeProvider } from "./Components/WebModeContext";

function AnimatedRoutes() {
  const location = useLocation();
  const pageTransition = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: {
      type: "spring",
      stiffness: 220,   // fast response
      damping: 24,      // smooth stop, no extra bounce
      mass: 0.8,        // thoda light feel
    },
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