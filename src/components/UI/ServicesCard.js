import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ServicesCard.css";

export default function ServicesCard() {
  const myStyle = {
    width: "18rem",
    padding: "20%",
    border: "none",
    overflow: "automatic",
    margin: "auto",
    borderRadius: 25,
  };

  return (
    <div>
      <h1 className="mt-5" style={{ fontSize: 52 }}>
        Our Services
      </h1>
      <div className="d-flex justify-content-center pb-2 pt-2">
        <Link to="services#id=a" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/10.png"
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Character Certificate</h5>
          </div>
        </Link>
        <Link to="services#id=b" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/3.png"
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">General Police Verification</h5>
          </div>
        </Link>
        <Link to="services#id=c" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/9.png"
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Learner Driving License</h5>
          </div>
        </Link>
        <Link to="services#id=h" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/6.png"
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Employee Registeration</h5>
          </div>
        </Link>
        <Link to="services#id=n" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/4.png"
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Copy of FIR</h5>
          </div>
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="services#id=m" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/8.png"
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Womens Violence Report</h5>
          </div>
        </Link>
        <Link to="services#id=l" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/2.png"
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Crime Report</h5>
          </div>
        </Link>
        <Link to="services#id=k" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/1.png"
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Loss Report</h5>
          </div>
        </Link>
        <Link to="services#id=i" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/7.png"
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5 className="card-title">Tenants Registeration</h5>
          </div>
        </Link>
        <Link to="services#id=j" className="card m-1">
          <img
            style={myStyle}
            src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/5.png"
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
