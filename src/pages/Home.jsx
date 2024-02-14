import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Assets
import HeroBanner from "/images/interface/herobanner.jpg";
import IntroBanner1 from "./../assets/civil-engineer-construction-worker.jpg";
import IntroBanner2 from "./../assets/crop-architect-opening-blueprint-scaled.jpg";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DomainIcon from "@mui/icons-material/Domain";
import ConstructionIcon from "@mui/icons-material/Construction";
import TagIcon from "@mui/icons-material/Tag";
import EngineeringIcon from "@mui/icons-material/Engineering";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

function Home() {
  return (
    <div className="Home">
      {/*-- __HEAD__ --*/}
      <Helmet>
        <title>Home | Al Muqayseh General Contracting Est.</title>
      </Helmet>

      {/*-- __NAVBAR__ --*/}
      <Navbar />

      {/*-- __MAIN__ --*/}
      <main className="__home-page">
        {/*-- __HERO__ --*/}
        <div className="hero-section">
          <div className="hero-layout">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 d-flex flex-column h-100vh justify-content-center">
                  <div className="hero-chip">
                    Government Approved C.R. 1010630351
                  </div>
                  <h1 className="hero-heading">
                    We are Al-Muqayseh Gen Cont Est.
                  </h1>
                  <p className="hero-paragraph">
                    We are dedicated to helping you find the best workers for
                    your business. We have a wide range of workers to choose
                    from. We are dedicated.
                  </p>
                  <Link to="/contact-us">
                    <button className="btn btn-primary hero-button">
                      Consult Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-- __INTRO__ --*/}
        <div className="intro-section">
          <div className="container">
            <div className="row row-gap-5">
              <div className="col-12 col-lg-6">
                <h2 className="intro-heading animation">
                  We turn your ideas into reality
                  <TipsAndUpdatesIcon
                    sx={{
                      fontSize: 40,
                      marginLeft: "10px",
                      opacity: "0.2",
                    }}
                  />
                </h2>
                <hr className="line-bar animation" />
                <p className="intro-paragraph animation">
                  Engaged in the business of Oil and Gas, Infrastructure,
                  Hydrocarbons, and Power sectors covering its services
                  throughout Kingdom of Saudi Arabia. In all our physical
                  operations we seek to work with clients and partners which
                  share our commitment to high international standards of
                  operation.
                </p>
                <Link to="/about-us">
                  <button className="intro-button btn btn-primary animation">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-6 animation">
                    <img src={IntroBanner1} alt="Hero Banner" />
                  </div>
                  <div className="col-6 animation">
                    <img src={IntroBanner2} alt="Hero Banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-- __SERVICES__ --*/}
        <div className="services-section">
          <div className="container">
            <div className="row row-gap-4">
              <div className="col-12 animation">
                <p className="services-chip">We Are Innovative</p>
                <h2 className="services-heading">Our Services</h2>
                <hr className="line-bar" />
              </div>
              <div className="col-12 col-lg-4">
                <div className="service-card animation">
                  <DomainIcon />
                  <h3>Mechanical Works</h3>
                  <p>
                    All piping works necessary to provide a complete, functional
                    facility in accordance with the project requirements,
                    applicable codes and standards, and project specifications
                    to the satisfaction of Clients.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="service-card animation">
                  <ConstructionIcon />
                  <h3>Construction</h3>
                  <p>
                    High demand for construction manpower in Saudi Arabia due to
                    rapid economic growth and infrastructure development. We
                    specialize in supplying skilled and semi-skilled
                    professionals.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="service-card animation">
                  <TagIcon />
                  <h3>Manpower Supply</h3>
                  <p>
                    We prefer oral or convenient testing for candidate
                    selection, coordinated by the employer or their assign. We
                    handle settlement, transportation, and other necessary
                    support.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="service-card animation">
                  <EngineeringIcon />
                  <h3>Civil Works</h3>
                  <p>
                    Well versed in engineering and construction expertise
                    includes traditional disciplines, Civil, Mechanical,
                    Electrical, structural engineering as well as process and
                    mechanical design.
                  </p>
                </div>
              </div>
              <div className="col-12 text-center">
                <Link to="/services">
                  <button className="services-button btn text-white mt-3 animation">
                    View all services
                    <KeyboardArrowRightIcon
                      sx={{
                        mt: "-3px",
                      }}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*-- __CLIENTS__ --*/}
        <div className="clients-section">
          <div className="container">
            <div className="row row-gap-5">
              <div className="col-12 col-md-6">
                <p className="clients-chip animation">
                  We turn ideas into works of art
                </p>
                <h2 className="clients-heading animation">Our Clients</h2>
                <hr className="line-bar animation" />
                <p className="clients-paragraph animation">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring.
                </p>
                <Link to="/clients">
                  <button className="clients-button btn btn-primary animation">
                    See More
                  </button>
                </Link>
              </div>
              <div className="col-12 col-md-6">
                <div className="row row-gap-3">
                  <div className="col-6 col-lg-3">
                    <div className="client-card animation">
                      <img src="/images/icons/cpp.jpg" alt="Client" />
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="client-card animation">
                      <img src="/images/icons/daelim.png" alt="Client" />
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="client-card animation">
                      <img src="/images/icons/marafiq.jpg" alt="Client" />
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="client-card animation">
                      <img src="/images/icons/SABIC.png" alt="Client" />
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="client-card animation">
                      <img src="/images/icons/sipchem.gif" alt="Client" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-- __TEAM__ --*/}
        <div className="team-section">
          <div className="container">
            <div className="row">
              <div className="col-12 animation">
                <p className="team-chip">We are a team of professionals</p>
                <h2 className="team-heading">Our Team</h2>
                <hr className="line-bar" />
                <br />
              </div>
              <div className="col-12">
                <div className="row row-gap-4">
                  <div className="col-6 col-lg-4">
                    <div className="team-card animation">
                      <img src="/images/persons/1.jpeg" alt="Team Member" />
                      <h3 className="team-name">
                        Aujan Bin Obaid Bin Abu Thaneen
                      </h3>
                      <p className="team-title">Managing Director</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4">
                    <div className="team-card animation">
                      <img src="/images/persons/2.jpeg" alt="Team Member" />
                      <h3 className="team-name">Parvez Shahidullah</h3>
                      <p className="team-title">Marketing Specialist</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4">
                    <div className="team-card animation">
                      <img src="/images/persons/3.jpg" alt="Team Member" />
                      <h3 className="team-name">Mohammad Shahjahan Chanchal</h3>
                      <p className="team-title">Planning Operating Manager</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4">
                    <div className="team-card animation">
                      <img src="/images/persons/4.jpg" alt="Team Member" />
                      <h3 className="team-name">Mohammad Sohel</h3>
                      <p className="team-title">Marketing Manager</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4">
                    <div className="team-card animation">
                      <img src="/images/persons/5.jpg" alt="Team Member" />
                      <h3 className="team-name">Mahdi Hasan Shihab</h3>
                      <p className="team-title">Operations Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-- __CONTACT__ --*/}
        <div className="contact-section">
          <div className="container">
            <div className="row row-gap-3">
              <div className="col-12 animation">
                <p className="contact-chip">CONTACT US</p>
                <h2 className="contact-heading">Get in touch</h2>
                <hr className="line-bar" />
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center animation">
                <p className="contact-info">
                  <CallRoundedIcon sx={{ fontSize: 20 }} />
                  Phone: <br />
                  <span>+966 55160 6778, +880 1322660800</span>
                </p>
                <p className="contact-info">
                  <CallRoundedIcon sx={{ fontSize: 20 }} />
                  Tel: <br />
                  <span>011 2442233</span>
                </p>
                <p className="contact-info">
                  <EmailRoundedIcon sx={{ fontSize: 20 }} />
                  Email: <br />
                  <span>parvez.sahidullah@gmail.com</span>
                </p>
                <p className="contact-info">
                  <LocationOnRoundedIcon sx={{ fontSize: 20 }} />
                  Address: <br />
                  <span>
                    Riyadh 6181 Abi Al Ala Al Maari, Az Zahra, Riyadh, Saudi
                    Arabia
                  </span>
                </p>
              </div>
              <div className="col-12 col-lg-6 animation">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=6181 Abi Al Ala Al Maari, 2952, Az Zahra, Riyadh 12812, Saudi Arabia"
                  width="600"
                  height="378"
                  frameBorder="0"
                  style={{ width: "100%" }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/*-- __FOOTER__ --*/}
      <Footer />
    </div>
  );
}

export default Home;
