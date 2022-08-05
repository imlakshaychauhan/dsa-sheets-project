import React from 'react'
import Navbar from './Navbar Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Homepage Components/Home'
import Login from './User Related Pages/Login'
import Signup from './User Related Pages/Signup'
import { AuthProvider } from './User Related Pages/AuthContext';
import ForgotPage from './User Related Pages/ForgotPage'
import NeetCode from './NeetCode 150 Sheet/NeetCode';
import Blind from './Blind 75 Sheet/Blind'
import Footer from './Homepage Components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/forgot-password" element={<ForgotPage />} />
            <Route exact path="/neetcode" element={<NeetCode />} />
            <Route exact path="/blind" element={<Blind />} />
        </Routes>
        <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App