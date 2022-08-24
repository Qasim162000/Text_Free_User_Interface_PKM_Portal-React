import React from "react";
import Logo from "./logo.png";

export default function MarkazGallery() {
  return (
    <div>
      <div className="row p-5">
        <div className="col-3">
          <img src={Logo} alt="Fjords" style={{ height: 80 }} />
        </div>
        <div className="col-3">
          <img src={Logo} alt="Forest" style={{ height: 80 }} />
        </div>
        <div className="col-3">
          <img src={Logo} alt="Mountains" style={{ height: 80 }} />
        </div>
        <div className="col-3">
          <img src={Logo} alt="Mountains" style={{ height: 80 }} />
        </div>
      </div>
    </div>
  );
}
