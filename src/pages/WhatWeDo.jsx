import React from "react";
import { Helmet } from "react-helmet";
import init from "./utils/animation";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import JobCategory from "./components/JobCategory";
import { Link } from "react-router-dom";

function WhatWeDo() {
 React.useEffect(init, []);
 return (
  <div className="WhatWeDo">
   {/*-- __HEAD__ --*/}
   <Helmet>
    <title>Our Works – Al Muqayseh</title>
   </Helmet>

   {/*-- __NAVBAR__ --*/}
   <Navbar />

   {/*-- __MAIN__ --*/}
   <main className="__whatwedo-page">
    {/*-- __HERO__ --*/}
    <section className="hero-section">
     <div className="container">
      <h1>What We Do?</h1>
      <hr className="line-bar" />
      <p className="hero-paragraph mt-3">
       We provide a wide range of manpower services to meet the specific needs
       of our clients.
      </p>
      <Counter />
     </div>
    </section>
    {/*-- __INTRO__ --*/}
    <section className="intro-section">
     <div className="container p-0">
      <div>
       <div className="row row-gap-4">
        <div className="col-12 col-lg-6">
         <p className="intro-chip animation">Our Services</p>
         <h2 className="intro-heading animation">
          Introduction to Our Services
         </h2>
         <hr className="line-bar animation" />
         <p className="intro-paragraph animation">
          We are a leading manpower services provider in the Kingdom of Saudi
          Arabia. Our services are designed to meet the specific needs of our
          clients, ensuring that they receive the highest quality of service
          possible. We offer a wide range of services.
         </p>
         <Link to="/services">
          <button className="btn btn-primary animation">View Services</button>
         </Link>
        </div>
        <div className="col-lg-6 d-none d-lg-flex justify-content-center">
         <img
          src="/images/interface/sketch-new-construction-scaled.jpg"
          alt="Introduction to Our Services"
          className="animation"
          style={{
           maxHeight: "300px",
           aspectRatio: "3/3",
           objectFit: "cover",
           objectPosition: "right",
           borderRadius: "10px",
          }}
         />
        </div>
       </div>
      </div>
     </div>
    </section>

    {/*-- __FAQ__ --*/}
    <section className="faq-section">
     <div className="container">
      <div className="row mb-5">
       <div className="col-12 col-lg-6">
        <p className="faq-chip animation">Frequently Asked Questions</p>
        <h2 className="faq-heading animation">
         <span>FAQ</span> Section
        </h2>
        <hr className="line-bar animation" />
        <p className="faq-paragraph animation">
         We understand that you may have questions about our services. We have
         compiled a list of frequently asked questions to help you better
         understand what we do and how we can help you.
        </p>
       </div>
      </div>
      <div
       className="animation"
       style={{
        maxWidth: "600px",
       }}
      >
       <div className="accordion" id="faqAccordion">
        <div className="accordion-item bg-dark border-dark-subtle">
         <h2 className="accordion-header">
          <button
           className="accordion-button collapsed"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#collapse1"
           aria-controls="collapse1"
          >
           What is the scope of our services?
          </button>
         </h2>
         <div
          id="collapse1"
          className="accordion-collapse collapse text-white"
          style={{
           backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          data-bs-parent="#faqAccordion"
         >
          <div
           className="accordion-body lh-md"
           style={{
            fontSize: "0.9rem",
           }}
          >
           <p>
            We provide a wide range of manpower services to meet the specific
            needs of our clients. Our services include: <br />
            <br />
            <ul>
             <li className="mb-2">
              <b>Manpower Supply</b>
             </li>
             <li className="mb-2">
              <b>Construction Works</b>
             </li>
             <li className="mb-2">
              <b>Mechanical Works</b>
             </li>
             <li className="mb-2">
              <b>Maintenance Works</b>
             </li>
             <li className="mb-2">
              <b>HVAC and MEP Services</b>
             </li>
             <li>
              <b>Civil Works</b>
             </li>
            </ul>
           </p>
          </div>
         </div>
        </div>
        <div className="accordion-item bg-dark border-dark-subtle">
         <h2 className="accordion-header">
          <button
           className="accordion-button collapsed"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#collapse2"
           aria-controls="collapse2"
          >
           How can I apply for a job?
          </button>
         </h2>
         <div
          id="collapse2"
          className="accordion-collapse collapse text-white"
          style={{
           backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          data-bs-parent="#faqAccordion"
         >
          <div
           className="accordion-body lh-md"
           style={{
            fontSize: "0.9rem",
           }}
          >
           <p>
            To apply for a job in a specific category, please follow these
            steps:
           </p>
           <ul>
            <li className="mb-2">
             <b>Submit Your Resume</b>: Visit our office and deliver a copy of
             your resume to our HR department.
            </li>
            <li className="mb-2">
             <b>Interview Process</b>: Upon receiving your resume, we will
             schedule an interview to further assess your skills, experience,
             and qualifications.
            </li>
            <li>
             <b>Agreement with Company Policies</b>: If selected for a position,
             you will be required to adhere to our company policies and
             guidelines. This includes agreeing to the terms and conditions
             outlined in our employment contract or agreement.
            </li>
           </ul>
           <p>
            Contact us for further information on how to apply for a job with
            us.
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>
    {/*-- __JOB__ --*/}
    <section className="job-section" id="career">
     <div className="container">
      <div className="row row-gap-4">
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
       <div className="col-12 mt-5">
        <JobCategory />
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

export default WhatWeDo;
