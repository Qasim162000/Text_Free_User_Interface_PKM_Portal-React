/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/FooterCard.css";

export default function FooterCard() {
  const myStyle = { fontSize: 48, padding: 15 };
  return (
    <div>
      <div className="card-group" style={{ backgroundColor: "rgb(33 37 41)" }}>
        <Link className="card" to={"services"}>
          <i className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i className="fa fa-address-book" style={myStyle}></i>
        </Link>
      </div>
    </div>
  );
}
