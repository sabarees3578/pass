// src/components/PasswordStrengthChecker.js
import React, { useState } from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (e) => {
    const value = e.target.value;
    setPassword(value);
    const result = zxcvbn(value);
    setStrength(result.crack_times_display.offline_slow_hashing_1e4_per_second);
  };

  return (
    <div>
      <h4>Password Strength Checker</h4>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={checkStrength}
      />
      <p>Time to crack: {strength}</p>
    </div>
  );
};

export default PasswordStrengthChecker;
