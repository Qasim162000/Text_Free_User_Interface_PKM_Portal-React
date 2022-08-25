import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar() {
  const [link, setLink] = useState("");
  const sendLink = (event) => {
    setLink(event.target.href);
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#172b4d" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/services"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={sendLink}
                      to={"/services#id=a"}
                    >
                      Character Certificate
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=b"}>
                      General Police Verification
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=c"}>
                      Learner Driving License
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=d"}>
                      Driving License Renewal
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=e"}>
                      International Driving License
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=f"}>
                      Duplicate Driving License
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=g"}>
                      Endorsement of a License
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=h"}>
                      Employee Registration
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=i"}>
                      Tenants Registration
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=j"}>
                      Vehicle Verification
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=k"}>
                      Loss Report
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=l"}>
                      Crime Report
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=m"}>
                      Women Violence Report
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/services#id=n"}>
                      Copy of FIR
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="centers" className="nav-link">
                  Our Centers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="verify" className="nav-link">
                  Verify
                </Link>
              </li>
              <li className="nav-item">
                <Link to="track" className="nav-link">
                  Track
                </Link>
              </li>

              <Link
                type="button"
                className="btn btn-light mx-1 my-1"
                to="sign-in"
              >
                Sign In
              </Link>

              <button
                type="button"
                className="btn btn-outline-danger mx-1 my-1"
              >
                اردو
              </button>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
