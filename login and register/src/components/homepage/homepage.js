import React from "react";
import "./homepage.css";
import { NavLink } from "react-router-dom";
import "./Service";
import "./Readings";

const Homepage = ({setLoginUser}) => {

    return (
        <div className="homepage">
            
            <nav>
              <div className="menuIcon">
                <ul className="navbar-list">
                  <li>
                    <NavLink className="navbar-link" to="/Service">Services</NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-link" to="/Readings">Records</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>  
        </div>
    );
};

export default Homepage;