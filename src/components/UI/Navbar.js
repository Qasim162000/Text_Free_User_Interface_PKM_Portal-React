import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar() {
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
                <a
                  className="nav-link dropdown-toggle"
                  href="#/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Character Certificate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      General Police Verification
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Learner Driving License
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Driving License Renewal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      International Driving License
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Duplicate Driving License
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Endorsement of a License
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Employee Registration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Tenants Registration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Vehicle Verification
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Loss Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Crime Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Women Violence Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Copy of FIR
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="Centers" className="nav-link">
                  Our Centers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Global" className="nav-link">
                  PKM Global
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Verify" className="nav-link">
                  Verify
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Track" className="nav-link">
                  Track
                </Link>
              </li>

              <Link
                type="button"
                className="btn btn-light mx-1 my-1"
                to="SignIn"
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
