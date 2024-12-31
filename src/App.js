import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Nav';
import Platforms from './Components/Platforms';




function App() {
document.body.style.backgroundColor = '#A28B55';
  return (
    <>
    <Navbar />
    <Platforms />
    </>
  );
}

export default App;