import React from 'react';
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className="SignUp-wrapper">
            <div className="SignUp-container">
            <div className="head">
                <h1 className="company">Create Your Account</h1>
            </div>
            <p className='msg'>Already have an account? <a href=''>Sign In</a></p>
            
            <div className="form">
                <form>
                    <input type="text" placeholder="Username" className="text" required/> <br/>
                    <input type="email" placeholder="Email" className="email" required/> <br/>
                    <input type="password" placeholder="Password" className="password" required/> <br/>
                    <a href="#" className="btn-SignUp">SignUp</a> <br/>
                    <a href="#" className="LogIn">LogIn</a>
                </form>
            </div>
            </div>
        </div>
    
    )
}

export default SignUp;