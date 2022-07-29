import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App