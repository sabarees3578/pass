// src/components/Dashboard.js
import React from "react";
import "./css/Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ username }) => {
  const navigate = useNavigate();

  const gotoStoreViewPasswords = () => {
    navigate("/savepassword");
  };
  const  PasswordStrengthChecker = () => {
    navigate("/PasswordStrengthChecker");
  };
  const  gotoPasswordGenerator = () => {
    navigate("/PasswordGenerator");
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {username}!</h2>
      <div className="dashboard-sections">
        <div className="section" onClick={gotoStoreViewPasswords}>
          <h3>Store & View Passwords</h3>
          {/* Password store/view components */}
        </div>
        <div className="section" onClick={PasswordStrengthChecker}>
          <h3>Password Strength Checker</h3>
          {/* Password strength checker components */}
        </div>
        <div className="section" onClick={gotoPasswordGenerator}>
          <h3>Random Password Generator</h3>
          {/* Password generator components */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
