import React from 'react';
import Navbar from "./Navbar"
import Jobs from "./pages/Jobs"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"
import Goals from './pages/Goals';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </div>
    </>
  )
}

export default App