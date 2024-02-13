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
                  <div className="hero-chip">Government Approved C.R. 1010630351</div>
                  <h1 className="hero-heading">
                    We are Al-Muqayseh Gen Cont Est.
                  </h1>
                  <p className="hero-paragraph">
                    We are dedicated to helping you find the best workers for
                    your business. We have a wide range of workers to choose
                    from. We are dedicated.
                  </p>
                  <button className="hero-button btn btn-primary">
                    <Link to="/contact">Consult Now</Link>
                  </button>
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
                <h2 className="intro-heading">
                  We turn your ideas into reality
                  <TipsAndUpdatesIcon
                    sx={{
                      fontSize: 40,
                      marginLeft: "10px",
                      opacity: "0.2",
                    }}
                  />
                </h2>
                <hr className="line-bar" />
                <p className="intro-paragraph">
                  Engaged in the business of Oil and Gas, Infrastructure,
                  Hydrocarbons, and Power sectors covering its services
                  throughout Kingdom of Saudi Arabia. In all our physical
                  operations we seek to work with clients and partners which
                  share our commitment to high international standards of
                  operation.
                </p>
                <button className="intro-button btn btn-primary">
                  <Link to="/about">Read More</Link>
                </button>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <img src={IntroBanner1} alt="Hero Banner" />
                  </div>
                  <div className="col-6">
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
              <div className="col-12">
                <p className="services-chip">We Are Innovative</p>
                <h2 className="services-heading">Our Services</h2>
                <hr className="line-bar" />
              </div>
              <div className="col-12 col-lg-4">
                <div className="service-card">
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
                <div className="service-card">
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
                <div className="service-card">
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
                <div className="service-card">
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
                <button className="services-button btn text-white mt-3">
                  <Link to="/services">
                    View all services
                    <KeyboardArrowRightIcon
                      sx={{
                        mt: "-3px",
                      }}
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/*-- __FOOTER__ --*/}
    </div>
  );
}

export default Home;
