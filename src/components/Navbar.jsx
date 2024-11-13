
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./css/Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav  className="navbar">
       <button><Link to="/">Home</Link></button>
      

      {user ? (
        <>
          <button><Link to="/dashboard">Dashboard</Link></button>
          <button onClick={() => auth.signOut()}>Logout</button>
        </>
      ) : (
        <>
           <button><Link to="/signup">SignUp</Link></button>
          <button><Link to="/login" >Login</Link></button>
          
        </>
      )}
    </nav>
  );
};

export default Navbar;
