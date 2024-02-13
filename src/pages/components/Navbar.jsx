import React from "react";
import { NavLink } from "react-router-dom";

// Assets
import Logo from "../../assets/Al-Muqayseh.png";

function Navbar() {
 return (
  <>
   <nav className="navbar">
    <div className="container">
     <NavLink className="navbar-brand" to="/">
      <img src={Logo} alt="Al Muqayseh Contracting Est" />
     </NavLink>
    </div>
   </nav>
  </>
 );
}

export default Navbar;
