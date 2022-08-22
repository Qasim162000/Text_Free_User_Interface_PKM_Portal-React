import React from "react";
import Logo from "./logo.png";

export default function MarkazGallery() {
  return (
    <div>
      <div class="row p-2">
        <div class="col-3">
          <img src={Logo} alt="Fjords" style={{ height: 80 }} />
        </div>
        <div class="col-3">
          <img src={Logo} alt="Forest" style={{ height: 80 }} />
        </div>
        <div class="col-3">
          <img src={Logo} alt="Mountains" style={{ height: 80 }} />
        </div>
        <div class="col-3">
          <img src={Logo} alt="Mountains" style={{ height: 80 }} />
        </div>
      </div>
      <div class="row p-2">
        <div class="col-3">
          <img src={Logo} alt="Fjords" style={{ height: 80 }} />
        </div>
        <div class="col-3">
          <img src={Logo} alt="Forest" style={{ height: 80 }} />
        </div>
        <div class="col-3">
          <img src={Logo} alt="Mountains" style={{ height: 80 }} />
        </div>
        <div class="col-3">
          <img src={Logo} alt="Mountains" style={{ height: 80 }} />
        </div>
      </div>
    </div>
  );
}
