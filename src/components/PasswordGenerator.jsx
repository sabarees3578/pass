// src/components/PasswordGenerator.js
import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let generatedPassword = "";
    for (let i = 0; i < 12; i++) {
      generatedPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(generatedPassword);
  };

  return (
    <div>
      <h4>Password Generator</h4>
      <button onClick={generatePassword}>Generate Password</button>
      <input type="text" value={password} readOnly />
    </div>
  );
};

export default PasswordGenerator;
