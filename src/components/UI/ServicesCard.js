import React from "react";
import { Link } from "react-router-dom";
export default function ServicesCard() {
  return (
    <div>
      <div className="d-flex justify-content-center p-2">
        <Link
        to="services"
        className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/10.png" className="card-img-top" alt="Cardimg1" />
          <div className="card-body">
            <h5 className="card-title">Character Certificate</h5>
          </div>
        </Link>
        <div className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/3.png" className="card-img-top" alt="Cardimg1" />
          <Link
          to="services"
          className="card-body">
            <h5 className="card-title">General Police Verification</h5>
          </Link>
        </div>
        <Link
        to="services"
         className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/9.png" className="card-img-top" alt="Cardimg1" />
          <div className="card-body">
            <h5 className="card-title">Learner Driving License</h5>
          </div>
        </Link>
        <Link
        to="services"
         className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/6.png" className="card-img-top" alt="Cardimg1" />
          <div className="card-body">
            <h5 className="card-title">Employee Registeration</h5>
          </div>
        </Link>
        <Link
        to="services"
         className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/4.png" className="card-img-top" alt="Cardimg1" />
          <div className="card-body">
            <h5 className="card-title">Copy of FIR</h5> 
          </div>
        </Link>
      </div>
      <Link
      to="services"
       className="d-flex justify-content-center p-2">
        <div className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/8.png" className="card-img-top" alt="Cardimg1" />
          <div className="card-body">
            <h5 className="card-title">Womens Violence Report</h5>
          </div>
        </div>
        <Link
        to="services"
         className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/2.png" className="card-img-top" alt="Cardimg1" />
          <div className="card-body">
            <h5 className="card-title">Crime Report</h5>
          </div>
        </Link>
        <Link
        to="services"
         className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/1.png" className="card-img-top" alt="Cardimg1" />
          <div className="card-body">
            <h5 className="card-title">Loss Report</h5>
          </div>
        </Link>
        <Link
        to="services"
         className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/7.png" className="card-img-top" alt="Cardimg1" />
          <div className="card-body">
            <h5 className="card-title">Tenants Registeration</h5>
          </div>
        </Link>
        <Link
        to="services"
         className="card m-1" style={{ width: "18rem" }}>
          <img src="https://pkm.punjab.gov.pk/assets/frontend/images/portfolio-2/5.png" className="card-img-top" alt="Cardimg1" />
          <div className="card-body">
            <h5 className="card-title">Vehicle Registeration</h5>
          </div>
        </Link>
      </Link>
    </div>
  );
}
