import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Assets

function Clients() {
  return (
    <div className="Clients">
      {/*-- __HEAD__ --*/}
      <Helmet>
        <title>Clients | Al Muqayseh General Contracting Est.</title>
      </Helmet>

      {/*-- __NAVBAR__ --*/}
      <Navbar />

      {/*-- __MAIN__ --*/}
      <main className="__clients-page">
        {/*-- __HERO__ --*/}
        <section className="hero-section">
          <div className="container">
            <h1>Our Clients</h1>
            <button className="btn text-white p-0 mt-2">
              <Link
                to="/"
                style={{
                  textDecoration: "underline",
                }}
              >
                Home
              </Link>{" "}
              <span
                style={{
                  color: "#ccc",
                }}
              >
                &gt;
              </span>{" "}
              <span>Clients</span>
            </button>
          </div>
        </section>
        {/*-- __CLIENTS__ --*/}
        <section className="clients-section">
          <div className="container">
            <div className="main">
                <div className="wrapper">
              <div className="item">
                <img alt="Client" src="/images/icons/clients/1.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/2.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/3.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/4.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/5.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/6.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/7.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/8.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/9.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/10.png" />
              </div>
            </div>
            <div className="wrapper opposite mt-5">
              <div className="item">
                <img alt="Client" src="/images/icons/clients/11.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/12.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/13.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/14.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/15.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/16.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/17.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/18.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/19.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/20.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/21.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/22.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/23.png" />
              </div>
            </div>
            <div className="wrapper mt-5">
              <div className="item">
                <img alt="Client" src="/images/icons/clients/24.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/25.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/26.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/27.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/28.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/29.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/30.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/31.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/32.png" />
              </div>
              <div className="item">
                <img alt="Client" src="/images/icons/clients/33.png" />
              </div>
            </div>
            </div>
            
          </div>
        </section>
      </main>

      {/*-- __FOOTER__ --*/}
    </div>
  );
}

export default Clients;
