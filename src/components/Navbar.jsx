import React from "react";
import { Link } from "react-router-dom";
import tplogo1 from "../assets/tplogo_white_png.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="glassnav">

        <div className="logo">
      <Link to="/">
      <img src={tplogo1} height="30px" width="150px"  alt="" />
     
      
      </Link>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
