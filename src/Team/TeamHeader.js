import React from "react";
import "./TeamHeader.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="teamheader">
      <div className="teamheader__left">
        <Link to="/">
          <div className="teamheaderimg__container">
            <img
              src="https://media-exp1.licdn.com/dms/image/C510BAQE16x5t0uDm4Q/company-logo_200_200/0/1568468276035?e=2159024400&v=beta&t=Kno3pclqtMRNpav1Lx1hQ4YGsuWKSFHpIISiogua5wc"
              alt="SInC Logo"
            />
          </div>
        </Link>
        <h2>Student Incubation Cell</h2>
      </div>
      <div className="teamheader__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="teamheader__right__home">
            <h4 style={{ color: "white" }}>Home</h4>
          </div>
        </Link>
        {/* <div className="teamheader__right__initiatives">
          <h4 style={{ color: "white" }}>Initiatives</h4>
        </div> */}
        <div className="teamheader__right__initiative__dropdown">
          <span
            className="teamheader__right__initiative__dropbutton"
            style={{ color: "white" }}
          >
            Initiatives
          </span>
          <div className="teamheader__right__initiative__dropdowncontent">
            <Link
              to="/entrepreneurshipkickstart"
              style={{ textDecoration: "none" }}
            >
              <div className="teamheader__dropdownboxes">
                Entrepreneurship Kickstart
              </div>
            </Link>
            <Link to="/iitdangelnetwork" style={{ textDecoration: "none" }}>
              <div className="teamheader__dropdownboxes">
                IITD Angel Network
              </div>
            </Link>
            <Link to="/preincubationplan" style={{ textDecoration: "none" }}>
              <div className="teamheader__dropdownboxes">
                Pre PreIncubationPlan
              </div>
            </Link>
          </div>
        </div>
        <Link to="/startupinsight" style={{ textDecoration: "none" }}>
          <div className="teamheader__right__startupinsight">
            <h4 style={{ color: "white" }}>Startup Insight</h4>
          </div>
        </Link>
        <Link to="/team" style={{ textDecoration: "none" }}>
          <div className="teamheader__right__team">
            <h4 style={{ color: "yellow" }}>Team</h4>
          </div>
        </Link>
        <hr />
        <Link to="/contactus" style={{ textDecoration: "none" }}>
          <div className="teamheader__right__contact">
            <h4 style={{ color: "white" }}>Contact Us</h4>
          </div>
        </Link>
        <Link to="/faqs" style={{ textDecoration: "none" }}>
          <div className="teamheader__right__home">
            <h4 style={{ color: "white" }}>FAQ's</h4>
          </div>
        </Link>
        <Link to="/registerpage" style={{ textDecoration: "none" }}>
          <div className="teamheader__right__home">
            <h4 style={{ color: "white" }}>Register</h4>
          </div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="teamheader__right__home">
            <h4 style={{ color: "white" }}>Login</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;