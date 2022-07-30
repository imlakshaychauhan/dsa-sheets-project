import React from 'react'
import Navbar from './Navbar Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './User Related Pages/Home'
import Login from './User Related Pages/Login'
import Signup from './User Related Pages/Signup'
import { AuthProvider } from './User Related Pages/AuthContext';
import ForgotPage from './User Related Pages/ForgotPage'

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
        </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App