import React from 'react'
import './App.css'

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  )
}

export default App