import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ServicesCard.css";
import cc from "./ServiceCardImages/10.png";
import ldl from "./ServiceCardImages/9.png";
import wvr from "./ServiceCardImages/8.png";
import tr from "./ServiceCardImages/7.png";
import er from "./ServiceCardImages/6.png";
import vr from "./ServiceCardImages/5.png";
import cof from "./ServiceCardImages/4.png";
import gpv from "./ServiceCardImages/3.png";
import cr from "./ServiceCardImages/2.png";
import lr from "./ServiceCardImages/1.png";

export default function ServicesCard() {
  const myStyle = {
    width: "18rem",
    padding: "20%",
    overflow: "automatic",
    margin: "auto",
    borderRadius: 25,
  };

  const cardStyle = {
    textDecoration: "none",
    color: "black",
    borderRadius: "5%",
    boxShadow: "20px 20px 50px 10px grey",
  };

  return (
    <div style={{ margin: "80px 0px" }}>
      <h1 className="mt-5 mb-4" style={{ fontSize: 52 }}>
        Our Services
      </h1>
      <div className="d-flex justify-content-center pb-2 pt-2">
        <Link style={cardStyle} to="services#id=a" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={cc}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Character Certificate</h5>
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=b" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={gpv}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">General Police Verification</h5>
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=c" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={ldl}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Learner Driving License</h5>
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=h" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={er}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Employee Registeration</h5>
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=n" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={cof}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Copy of FIR</h5>
          </div>
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <Link style={cardStyle} to="services#id=m" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={wvr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Womens Violence Report</h5>
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=l" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={cr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Crime Report</h5>
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=k" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={lr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Loss Report</h5>
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=i" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={tr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Tenants Registeration</h5>
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=j" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={vr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Vehicle Registeration</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
