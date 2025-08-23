import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/HomePage/Home'
import About from './Pages/About/about'
import { Routes, Route, Navigate } from 'react-router-dom' 
import '@coreui/coreui/dist/css/coreui.min.css'
import Footer from './components/Footer/Footer'



function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Navigate to="/" />} />



    </Routes>

    <Footer/>
    </>
    
  )
}

export default App
