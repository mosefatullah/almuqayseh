import React from "react";
import { NavLink } from "react-router-dom";

// Assets
import Logo from "../../assets/logo.gif";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Navbar() {
  React.useEffect(() => {
    const navbarMenuLayer = document.querySelector(".navbar-menu-layer");
    const menuAction = document.querySelector(".menu-action button");
    const navbarMenu = document.querySelector(".navbar-menu");

    menuAction.addEventListener("click", () => {
      if (navbarMenu.classList.contains("active")) {
        navbarMenu.classList.remove("active");
        navbarMenuLayer.classList.remove("active");
      } else {
        navbarMenu.classList.add("active");
        navbarMenuLayer.classList.add("active");
      }
    });
  }, []);
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
        <div className="navbar-menu">
          <div className="container">
            <div className="row row-gap-4">
              <div className="col-12 col-lg-4">
                <ul className="list-unstyled">
                  <li>
                    <span>Basic</span>
                  </li>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-us">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-4">
                <ul className="list-unstyled">
                  <li>
                    <span>About Us</span>
                  </li>
                  <li>
                    <NavLink to="/about-us">Our Company</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about/our-team">Our Team</NavLink>
                  </li>
                  <li>
                    <NavLink to="/clients">Our Clients</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar-menu-layer"></div>
    </>
  );
}

export default Navbar;
