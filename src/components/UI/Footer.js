import React from "react";
import "../../styles/Footer.css";
import FooterCard from "./FooterCard";

export default function Footer() {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "rgb(33 37 41)" }}
      >
        <FooterCard />
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgb(33 37 41)" }}
        >
          © 2020 Copyright: PUNJAB POLICE, PAKISTAN - ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
