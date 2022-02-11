import React from "react";
import "./AboutStartupHeader.css";
import sinc from "./Images/sinc.png";
import InBetween from "./Images/InBetween.png";
import Starbucks from "./Images/starbucks.png";
import Instagram from "./Images/instagram.png";
import Github from "./Images/github.png";
import LinkedIn from "./Images/linkedin.png";
import { Link } from "react-router-dom";
// import "./AboutStartupSummary.css";
// import awards from './Images/awards.png'
// import business from './Images/business-addressed-problem.png'
// import contact from './Images/contact-us.png'
// import ideas from './Images/ideas.png'
// import target from './Images/target-population.png'

function Header() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
      <div className="aboutstartupHeader-TopBar">
        <img
          src={sinc}
          alt="Logo"
          style={{ height: "40px", width: "40px" }}
          className="aboutstartupHeader-TopBar-Items"
        />
        <div>
          <h2
            id="aboutstartupHeader-Name"
            className="aboutstartupHeader-TopBar-Items"
          >
            Student Incubation Cell
          </h2>
        </div>
      </div>
      </Link>
      <div className="aboutstartupHeader-InBetween">
        <img
          src={InBetween}
          alt="Logo"
          style={{ height: "120px", width: "100%" }}
          className="aboutstartupHeader-InBetween"
        />
      </div>
      <div className="aboutstartupHeader-Startup">
        <div className="aboutstartupHeader-Startup-Logo">
          <img
            src={Starbucks}
            alt="Logo"
            style={{ height: "120px", width: "120px" }}
            className="aboutstartupHeader-"
          />
        </div>
        <div className="aboutstartupHeader-Startup-Contact">
          <div></div>
          <div className="aboutstartupHeader-Startup-Contact-Content">
            <div>
              <h1 style={{ margin: "5px" }}>Starbucks</h1>
              <span style={{ margin: "0px" }}>Additional Info</span>
            </div>
            <div>
              <div style={{ margin: "0px", padding: "0px" }}>
                <img
                  src={Instagram}
                  alt="Logo"
                  style={{ height: "40px", width: "40px", padding: "15px" }}
                />
                <img
                  src={Github}
                  alt="Logo"
                  style={{ height: "40px", width: "40px", padding: "15px" }}
                />
                <img
                  src={LinkedIn}
                  alt="Logo"
                  style={{ height: "40px", width: "40px", padding: "15px" }}
                />
              </div>
              <div>www.ourstartup.com</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
