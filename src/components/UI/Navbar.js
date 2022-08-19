import React from "react";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#/">
            <img src={logo} alt="logo" />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#/">
                  Home
                </a>
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
                    <a className="dropdown-item" href="#/">
                      Character Certificate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      General Police Verification
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Learner Driving License
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Driving License Renewal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      International Driving License
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Duplicate Driving License
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Endorsement of a License
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Employee Registration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Tenants Registration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Vehicle Verification
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Loss Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Crime Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Women Violence Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Copy of FIR
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Our Centers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  PKM Global
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Verify
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Track
                </a>
              </li>
              <button type="button" className="btn btn-light mx-1">
                Sign In
              </button>
              <button type="button" class="btn btn-outline-danger mx-1">
                اردو
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
