// src/components/SavePassword.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SavePassword = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const gotosavepassword = () => {
    navigate("/viewpasswords");
  }
  const savePassword = async () => {
    try {
      await addDoc(collection(db, "passwords"), {
        username,
        password,
      });
      alert("Password saved!");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error saving password: ", error);
    }
  };

  return (
    <div >
     <center className="savepassword">
     <h4>Save a Password</h4>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={savePassword}>Save</button>
      <button onClick={gotosavepassword}> view save password</button>
     </center>
    </div>
  );
};

export default SavePassword;
