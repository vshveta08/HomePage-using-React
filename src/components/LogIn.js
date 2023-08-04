import React from "react";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="LogIn-wrapper">
      <div className="LogIn-container">
        <div className="head">
          <h1 className="company">Log In to Your Account</h1>
        </div>
        <p className='msg'>Welcome back</p>
        
        <div className="form">
          <form>
              <input type="text" placeholder="Username" className="text" required/> <br/>
              <input type="password" placeholder="••••••••••••••" className="password" required/> <br/>
              <a href="#" className="btn-login">Login</a> <br/>
              <a href="#" className="forgot">Forgot?</a>
            </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
