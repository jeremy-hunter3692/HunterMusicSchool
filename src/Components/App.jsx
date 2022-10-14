import React from 'react'
import Landing from './Landing'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import Videos from './Videos'
import '../App.css'

export default function App() {
  return (
    <>
      <div className="appholder">
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}
