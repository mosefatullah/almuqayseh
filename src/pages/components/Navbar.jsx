import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
 return (
  <>
   <nav className="navbar">
    <div className="container">
     <NavLink className="navbar-brand" to="/">
      Man Power
     </NavLink>
    </div>
   </nav>
  </>
 );
}

export default Navbar;
