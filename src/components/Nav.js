import React from "react";
import { render } from "react-dom";
import {Link, withRouter} from 'react-router-dom';

function Nav(){
    const navstyle={
        color:'white'
    };

    return(
        <nav>
            <ul className="nav-links">
                <Link style={navstyle} to="/register">
            <li>Register</li>
            </Link>
            <Link style={navstyle} to="/login">
            <li>Login</li>
            </Link>
            <Link style={navstyle} to="/CreateEvent">
            <li>Create Event</li>
            </Link>
            <Link style={navstyle} to="/listing">
            <li>Listing</li>
            </Link>
            
            </ul>
        </nav>
    );
}
export default Nav;