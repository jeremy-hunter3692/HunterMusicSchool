import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Videos from './Videos'
import Space from './Space'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import '../App.css'

export default function App() {
  return (
    <>
      <div className="appholder">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/space" element={<Space />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}
