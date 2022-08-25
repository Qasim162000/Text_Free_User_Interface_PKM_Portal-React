import React from "react";
import "../../styles/Footer.css";
import FooterCard from "./FooterCard";

export default function Footer() {
  const myStyle = {
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
  };
  return (
    <div>
      <footer style={{ backgroundColor: "#172b4d" }}>
        <FooterCard />
        <div className="col-8" style={myStyle}>
          <div
            className="text-center"
            style={{
              backgroundColor: "#172b4d",
              color: "#ccc",
            }}
          >
            <p style={{ fontSize: 14, padding: "10px 0px" }}>
              © 2020 PUNJAB POLICE, PAKISTAN | ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
