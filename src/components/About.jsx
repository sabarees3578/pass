// src/components/About.js
import React from "react";
import "./css/about.css"; 

function About() {
  return (
    <div className="about-container">
      <h1>About Our Password Manager</h1>
      <p>
        Our Password Manager is designed to help you securely store, manage, and generate strong passwords, all in one convenient place. We prioritize user security and have implemented several features to ensure your sensitive information remains safe.
      </p>

      <section className="about-features">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Encrypted Storage:</strong> All passwords are encrypted and split across multiple databases for added security.</li>
          <li><strong>Face Lock:</strong> Provides an additional layer of security by using face recognition for authentication.</li>
          <li><strong>Password Strength Checker:</strong> Ensures your passwords are strong enough to protect your accounts.</li>
          <li><strong>Password Generator:</strong> Helps create complex passwords to keep your accounts secure.</li>
          <li><strong>Email Notifications:</strong> Get notified of important security alerts and account activity.</li>
        </ul>
      </section>

      <section className="about-security">
        <h2>Our Commitment to Security</h2>
        <p>
          We use state-of-the-art encryption methods, multi-factor authentication, and facial recognition to protect your data. Our team is committed to keeping your data safe and private, ensuring you have peace of mind when managing your passwords.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our goal is to make digital security accessible and convenient. By simplifying password management, we aim to empower users to protect their online presence effortlessly. Thank you for trusting us with your security.
        </p>
      </section>
    </div>
  );
}

export default About;
