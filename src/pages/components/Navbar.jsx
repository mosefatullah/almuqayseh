import React from "react";
import { NavLink } from "react-router-dom";

// Assets
import Logo from "../../assets/Al-Muqayseh.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Al Muqayseh Contracting Est" />
            <div className="logo">
              <h3>Al-Muqayseh</h3>
              <p>General Contracting Est.</p>
            </div>
          </NavLink>
          <div className="navbar-items">
            <p className="contact-info">
              CALL US! <span>(+966) 501163626</span>
            </p>
            <div className="menu-action">
              <button className="btn btn-primary">
                <MenuRoundedIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
