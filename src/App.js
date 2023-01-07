import React from "react";
import Navbar from "./Navbar Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homepage Components/Home";
import Login from "./User Related Pages/Login";
import Signup from "./User Related Pages/Signup";
import { AuthProvider } from "./User Related Pages/AuthContext";
import ForgotPage from "./User Related Pages/ForgotPage";
import NeetCode from "./NeetCode 150 Sheet/NeetCode";
import Blind from "./Blind 75 Sheet/Blind";
import Striver from "./Striver Sheet/Striver";
import Aman from "./Aman Sheet/Aman";
import Fraz from "./Fraz Sheet/Fraz";
import Love from "./Love Babbar Sheet/Love";
import About from "./pages/About page/About"

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/forgot-password" element={<ForgotPage />} />
            <Route exact path="/neetcode" element={<NeetCode />} />
            <Route exact path="/blind" element={<Blind />} />
            <Route exact path="/striver" element={<Striver />} />
            <Route exact path="/aman" element={<Aman />} />
            <Route exact path="/fraz" element={<Fraz />} />
            <Route exact path="/love" element={<Love />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
