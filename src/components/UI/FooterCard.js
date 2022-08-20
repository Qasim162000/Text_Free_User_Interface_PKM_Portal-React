/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import changeimg from "./logo.png";

export default function FooterCard() {
  return (
    <div>
      <div className="card-group">
        <div className="card">
          <img className="card-img-top" src={changeimg} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={changeimg} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={changeimg} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={changeimg} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={changeimg} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={changeimg} alt="Card image cap" />
        </div>
      </div>
    </div>
  );
}
