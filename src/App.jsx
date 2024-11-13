// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import SavePassword from "./components/SavePassword";
import ViewPasswords from "./components/ViewPasswords";
import PasswordStrengthChecker from "./components/PasswordStrengthChecker";
import PasswordGenerator from "./components/PasswordGenerator";
import'./App.css';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={user ? <Dashboard username={user.email} /> : <Navigate to="/login" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/savepassword" element={<SavePassword />} />
          <Route path="/viewpasswords" element={<ViewPasswords />} />
          <Route path="/PasswordStrengthChecker" element={<PasswordStrengthChecker />} />
          <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
