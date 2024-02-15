import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import init from "./utils/animation";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AdsClickIcon from "@mui/icons-material/AdsClick";
import FilterHdrIcon from "@mui/icons-material/FilterHdr";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

function About() {
 React.useEffect(init, []);
 return (
  <div className="About">
   {/*-- __HEAD__ --*/}
   <Helmet>
    <title>About Us - Al Muqayseh General Contracting Est.</title>
   </Helmet>

   {/*-- __NAVBAR__ --*/}
   <Navbar />

   {/*-- __MAIN__ --*/}
   <main className="__about-page">
    <section className="hero-section">
     <div className="container-fluid">
      <div className="row row-gap-4 justify-content-around align-items-center">
       <div className="col-12 col-lg-6">
        <h1>About Us</h1>
        <hr className="line-bar" />
        <p className="mt-4">
         Al-Muqayseh Gen Cont Est stands at the forefront of manpower services
         in the Kingdom of Saudi Arabia, offering specialized solutions across
         diverse sectors. Our primary objective is to elevate HR standards,
         ensuring seamless operations and maximizing efficiency for our clients.
         With an unwavering commitment to upholding international benchmarks, we
         foster collaborative relationships with partners who share our vision
         for excellence.
         <br />
         <br />
         Our strategic approach is underpinned by a comprehensive understanding
         of both global and local dynamics, enabling us to effectively address
         the unique challenges and opportunities present in the Saudi Arabian
         market. We are deeply invested in the nation's prosperity and
         well-being, striving to contribute positively to its socio-economic
         landscape through the delivery of superior manpower services.
         <br />
         <br />
         Driven by innovation and a results-oriented mindset, we continuously
         seek new avenues for growth and improvement. By forging enduring
         partnerships with key stakeholders and leveraging our extensive
         expertise, we aim to not only meet but exceed expectations in every
         endeavor. At Al-Muqayseh Gen Cont Est, we are dedicated to being more
         than just service providers; we are catalysts for progress, shaping the
         future of manpower excellence in Saudi Arabia and beyond. Join us on
         this journey towards a brighter tomorrow.
        </p>
        <Link to="/about/what-we-do">
         <button className="btn btn-outline-primary text-white py-2 px-4 mt-5">
          Explore what we do
         </button>
        </Link>
       </div>
       <div className="col-12 col-lg-4">
        <img
         src="/images/interface/construction-home-scaled.jpg"
         alt="About Us"
         className="img-fluid"
        />
       </div>
      </div>
     </div>
    </section>
    <section className="about-section">
     <div className="container">
      <div
       className="row"
       style={{
        rowGap: "5rem",
       }}
      >
       <div className="col-12 col-lg-6 animation">
        <h2 className="about-heading">
         Our <span>Vision</span>
        </h2>
        <hr className="line-bar" />
        <p className="about-paragraph">
         Our vision is to be the leading provider of engineering and
         construction services in our chosen markets, delivering quality
         projects and services to our clients, while offering growth and
         opportunity to our employees.
        </p>
       </div>
       <div className="d-none d-lg-flex  col-lg-6 align-items-center justify-content-center animation">
        <div className="special">
         <AdsClickIcon style={{ fontSize: 150, opacity: 0.1 }} />
        </div>
       </div>
       <div className="d-none d-lg-flex col-lg-6 align-items-center justify-content-center animation">
        <div className="special">
         <FilterHdrIcon style={{ fontSize: 150, opacity: 0.1 }} />
        </div>
       </div>
       <div className="col-12 col-lg-6 animation">
        <h2 className="about-heading">
         <span>Our</span> Mission
        </h2>
        <hr className="line-bar" />
        <p className="about-paragraph">
         Our mission is to provide our clients with the highest quality
         construction services, delivered on time and under budget. We are
         committed to building value for our clients, employees, and community.
         <br />
         <br />
         <ul>
          <li>
           Providing solutions and labor services to meet the expectations of
           our clients, in the public, private, individual sectors, domestic
           helper, and domestic labor.
          </li>
          <li>
           Providing the best services to our clients in the field of labor
           services, and providing the best and most efficient solutions that
           meet the needs of our clients.
          </li>
         </ul>
        </p>
       </div>
       <div className="col-12 col-lg-6 animation">
        <h2 className="about-heading">
         Our <span>Values</span>
        </h2>
        <hr className="line-bar" />
        <p className="about-paragraph">
         Our core values are the principles that guide us daily in helping our
         clients achieve their goals. Our relationships are built on trust,
         honesty, and integrity. We are always thinking about the future, and
         how we can make a positive impact on the world.
        </p>
       </div>
       <div className="d-none d-lg-flex col-lg-6 align-items-center justify-content-center animation">
        <div className="special">
         <StarBorderPurple500Icon style={{ fontSize: 150, opacity: 0.1 }} />
        </div>
       </div>
      </div>
     </div>
    </section>
   </main>

   {/*-- __FOOTER__ --*/}
   <Footer />
  </div>
 );
}

export default About;
