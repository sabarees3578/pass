// src/components/ViewPasswords.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ViewPasswords = () => {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const fetchPasswords = async () => {
      const querySnapshot = await getDocs(collection(db, "passwords"));
      setPasswords(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchPasswords();
  }, []);

  return (
    <div>
      <h4>View Saved Passwords</h4>
      <ul>
        {passwords.map((password, index) => (
          <li key={index}>
            Username: {password.username}
            <br />
            Password: {password.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPasswords;
