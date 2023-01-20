import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home';

function App(){
  return (
    <Router>
    <>
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        </div>
      </div>
      <Routes>
       <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </>
      </Router>
  )
}

export default App