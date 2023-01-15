import React from 'react'
import './App.css'

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Header />
        <Navbar />

      </div>
    </div>
  )
}

export default App