/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/FooterCard.css";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default function FooterCard() {
  tippy("#myButton1", {
    content: "Add Text here",
    placement: "top",
    animation: "fade",
  });
  tippy("#myButton2", {
    content: "Add Text here",
    placement: "top",
    animation: "fade",
  });
  tippy("#myButton3", {
    content: "Add Text here",
    placement: "top",
    animation: "fade",
  });
  tippy("#myButton4", {
    content: "Add Text here",
    placement: "top",
    animation: "fade",
  });
  tippy("#myButton5", {
    content: "Add Text here",
    placement: "top",
    animation: "fade",
  });
  tippy("#myButton6", {
    content: "Add Text here",
    placement: "top",
    animation: "fade",
  });
  const myStyle = { fontSize: 48, padding: 15 };
  return (
    <div>
      <div className="card-group" style={{ backgroundColor: "rgb(33 37 41)" }}>
        <Link className="card" to={"services"}>
          <i id="myButton1" className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i id="myButton2" className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i id="myButton3" className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i id="myButton4" className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i id="myButton5" className="fa fa-address-book" style={myStyle}></i>
        </Link>

        <Link className="card" to={"services"}>
          <i id="myButton6" className="fa fa-address-book" style={myStyle}></i>
        </Link>
      </div>
    </div>
  );
}
