import React from 'react';
import '../../styles/main.css';
import "./Navbar.css";
import {Link} from "react-router-dom";
function Navbar(){
    return (
        
        <div className ="Navbar">

            <div className="navlinks py-8 flex">
          <Link className="link" to ="/about">
            <p className ="link w-1/3 px-10">About</p>
            </Link>
            <Link className="link" to="/shop">
            <p className ="link w-1/3 px-10">Shop</p>
            </Link>
            <Link className="link" to="/contact">
            <p className="link w-1/3 px-10">Contact</p>
            </Link>
            </div>

        </div>
       
    );
};

export default Navbar;

