import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Nav';
import Platforms from './Components/Platforms';
import Content from './Components/content';



function App() {
document.body.style.backgroundColor = '#ECDFCC';
  return (
    <>
    <Navbar />
    <Platforms />
    {/* <Content /> */}
    </>
  );
}

export default App;