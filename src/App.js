import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Nav';
import Platforms from './Components/Platforms';
import Content from './Components/content';
import Cursor from './Components/cursor';
import about from './Components/about';
import resume from './Components/resume';
import projects from './Components/projects';
import letstalk from './Components/letstalk';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
document.body.style.backgroundColor = '#ECDFCC';
document.body.style.overflow = 'hidden';
  return (
    <>
    <Router>
      <Cursor />
      <Navbar />
      <Platforms/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<about />} />
        <Route path="/resume" element={<resume />} />
        <Route path="/projects" element={<projects />} />
        <Route path="/letstalk" element={<letstalk />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;