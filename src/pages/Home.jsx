import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import init from "./utils/Animation";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import JobCategory from "./components/JobCategory";
import ContactBox from "./components/ContactBox";
import Team from "./components/Team";

// Assets
import IntroBanner1 from "./../assets/civil-engineer-construction-worker.jpg";
import IntroBanner2 from "./../assets/crop-architect-opening-blueprint-scaled.jpg";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DomainIcon from "@mui/icons-material/Domain";
import ConstructionIcon from "@mui/icons-material/Construction";
import TagIcon from "@mui/icons-material/Tag";
import EngineeringIcon from "@mui/icons-material/Engineering";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

function Home() {
 React.useEffect(init, []);
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
    <section className="hero-section">
     <div className="hero-layout">
      <div className="container">
       <div className="row">
        <div className="col-12 col-lg-7 d-flex flex-column h-100vh justify-content-center">
         <div className="hero-chip">Government Approved C.R. 1010630351</div>
         <h1 className="hero-heading">
          We are <span>Al-Muqayseh</span> Gen Cont Est.
         </h1>
         <p className="hero-paragraph">
          At Al-Muqayseh Gen Cont Est., we're man power specialists. With a
          commitment to excellence and innovation, we forge partnerships for
          lasting impact. Join us in shaping the future of industry.
         </p>
         <Link to="/contact-us">
          <button className="btn btn-primary hero-button">Consult Now</button>
         </Link>
        </div>
       </div>
      </div>
     </div>
    </section>
    {/*-- __INTRO__ --*/}
    <section className="intro-section">
     <div className="container">
      <Counter />
      <div className="row row-gap-5">
       <div className="col-12 col-lg-6">
        <span className="intro-chip animation">
         <TipsAndUpdatesIcon
          className="animation"
          sx={{
           fontSize: 40,
           opacity: "0.2",
          }}
         />
        </span>
        <h2 className="intro-heading animation">
         We <span>turn your</span> ideas <span>into reality</span>
        </h2>
        <hr className="line-bar animation" />
        <p className="intro-paragraph animation">
         Engaged in the man power business throughout Kingdom of Saudi Arabia.
         In all our physical operations we seek to work with clients and
         partners which share our commitment to high international standards of
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
    </section>
    {/*-- __SERVICES__ --*/}
    <section className="services-section">
     <div className="container">
      <div className="row row-gap-4">
       <div className="col-12 animation">
        <p className="services-chip">We Are Innovative</p>
        <h2 className="services-heading">
         <DesignServicesIcon
          sx={{
           fontSize: 40,
           opacity: "0.2",
           mr: "10px",
          }}
         />
         Our <span>Services</span>
        </h2>
        <hr className="line-bar" />
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card animation">
         <DomainIcon />
         <h3>Mechanical Works</h3>
         <p>
          All piping works necessary to provide a complete, functional facility
          in accordance with the project requirements, applicable codes and
          standards, and project specifications to the satisfaction of Clients.
         </p>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card animation">
         <ConstructionIcon />
         <h3>Construction</h3>
         <p>
          High demand for construction manpower in Saudi Arabia due to rapid
          economic growth and infrastructure development. We specialize in
          supplying skilled and semi-skilled professionals.
         </p>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card animation">
         <TagIcon />
         <h3>Manpower Supply</h3>
         <p>
          We prefer oral or convenient testing for candidate selection,
          coordinated by the employer or their assign. We handle settlement,
          transportation, and other necessary support.
         </p>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card animation">
         <EngineeringIcon />
         <h3>Civil Works</h3>
         <p>
          Well versed in engineering and construction expertise includes
          traditional disciplines, Civil, Mechanical, Electrical, structural
          engineering as well as process and mechanical design.
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
    </section>
    {/*-- __JOB__ --*/}
    <section className="job-section">
     <div className="container">
      <div className="row row-gap-5">
       <div className="col-12 col-lg-6 animation">
        <p className="job-chip">Tailored Job Categories</p>
        <h2 className="job-heading">
         Job <span>Opportunities</span>
        </h2>
        <hr className="line-bar" />
        <p className="job-paragraph">
         Calling all individuals, especially those in Bangladesh, India, and
         Pakistan, interested in working in Saudi Arabia! We provide a diverse
         array of job opportunities. Contact us now to explore exciting career
         prospects.
        </p>
       </div>
       <div className="col-12 mt-4">
        <JobCategory />
       </div>
       <div className="text-center">
        <Link to="/about/what-we-do">
         <button className="job-button btn text-white mt-3 animation">
          Explore What We Do
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
    </section>
    {/*-- __CLIENTS__ --*/}
    <section className="clients-section">
     <div className="container">
      <div className="row row-gap-5">
       <div className="col-12 col-md-6 animation">
        <p className="clients-chip">We turn ideas into works of art</p>
        <h2 className="clients-heading">
         Our <span>Clients</span>
        </h2>
        <hr className="line-bar" />
        <Link to="/clients">
         <button className="clients-button btn btn-primary">See More</button>
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
    </section>
    {/*-- __TEAM__ --*/}
    <section className="team-section">
     <div className="container">
       <Team/>
     </div>
    </section>
    {/*-- __CONTACT__ --*/}
    <section className="contact-section" id="contact-us">
     <div className="container pb-5">
      <ContactBox />
     </div>
    </section>
   </main>

   {/*-- __FOOTER__ --*/}
   <Footer />
  </div>
 );
}

export default Home;
