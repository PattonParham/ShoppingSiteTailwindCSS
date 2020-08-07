import React from 'react';
import "./Login.css";
import '../../styles/main.css';

function Login(){
    return(
        <div className="row">
        <div className="Login">
            <div className="row">
                <input className="nameinput" placeholder="Username"></input>
            </div>
            <div className="row">
                <input className="passinput" placeholder="Password"></input>
            </div>
            <div className="row">
            <button className="loginbtn">Login</button>
            </div>
        </div>
        </div>
      
    );
};

export default Login;