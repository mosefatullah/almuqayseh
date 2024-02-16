import React from "react";

// Assets
import { Facebook } from "@mui/icons-material";

function Footer() {
 React.useEffect(() => {
  document.getElementById("cpYear").innerText = new Date().getFullYear();
 }, []);
 return (
  <>
   <footer className="__footer">
    <div className="container">
     <div className="row row-gap-4">
      <div className="col-12 col-lg-4">
       <h3>Quick Links</h3>
       <ol className="list-unstyled">
        <li>
         <a href="/">Home</a>
        </li>
        <li>
         <a href="/about-us">About Us</a>
        </li>
        <li>
         <a href="/services">Services</a>
        </li>
        <li>
         <a href="/clients">Clients</a>
        </li>
        <li>
         <a href="/contact-us">Contact</a>
        </li>
        <li>
         <a href="/career">Career</a>
        </li>
       </ol>
      </div>
      <div className="col-12 col-lg-4">
       <h3>About Us</h3>
       <ol className="list-unstyled">
        <li>
         <a href="/about-us">Our Company</a>
        </li>
        <li>
         <a href="/about/what-we-do">What We Do</a>
        </li>
        <li>
         <a href="/about/our-team">Our Team</a>
        </li>
        <li>
         <a href="/clients">Our Clients</a>
        </li>
       </ol>
      </div>
     </div>
     <hr className="mt-5" />
     <div className="d-flex justify-content-between">
      <p>
       &copy; <span id="cpYear">2024</span> Al-Muqayseh General Contracting Est.
      </p>
      <ul className="list-unstyled d-flex">
       <li className="ms-3">
        <a href="https://www.facebook.com/Almuqayseh">
         <Facebook />
        </a>
       </li>
      </ul>
     </div>
    </div>
   </footer>
  </>
 );
}

export default Footer;
