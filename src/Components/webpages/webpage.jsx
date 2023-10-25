import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from './About'

const webpage = () => {
  return (
    <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        {/* <Route path="/destinations" element={< />} />
        <Route path="/Login" element={<Loginform />} />
        <Route path="/signUp" element={<Registration />} /> */}

      </Routes>
    </Router>
    </div>
  )
}

export default webpage
