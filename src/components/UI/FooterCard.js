/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import changeimg from "./logo.png";

export default function FooterCard() {
  return (
    <div>
      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src={changeimg} alt="Card image cap" />
        </div>
        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap" />
        </div>
        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap" />
        </div>
        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap" />
        </div>
        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap" />
        </div>
        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap" />
        </div>
      </div>
    </div>
  );
}