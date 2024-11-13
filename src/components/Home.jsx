// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.CSS"; // Optional: import a CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Your Secure Password Manager</h1>
      <p className="safe">Safely store and manage your passwords in one place.</p>
      
      <div className="home-actions">
        <Link to="/signup" className="home-button">Sign Up</Link>
        <Link to="/login" className="home-button">Login</Link>
      </div>
      
      <section className="home-info">
        <h2>Features</h2>
        <ul>
          <li>🔒 Save passwords securely with encryption</li>
          <li>🔑 Generate strong passwords</li>
          <li>💼 Manage passwords across categories</li>
          <li>📊 Track password strength and get recommendations</li>
        </ul>
      </section>
      
      <section className="home-callout">
        <h2 className="get">Get Started</h2>
        <p>Sign up to start managing your passwords securely.</p>
        <Link to="/signup" className="callout-button">Create an Account</Link>
      </section>
    </div>
  );
}

export default Home;
