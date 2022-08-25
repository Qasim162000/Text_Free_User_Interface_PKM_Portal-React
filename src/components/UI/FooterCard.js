import React from "react";
import { Link } from "react-router-dom";
import "../../styles/FooterCard.css";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function FooterCard() {
  tippy("#myButton1", {
    content: "Add Text here",
  });
  tippy("#myButton2", {
    content: "Add Text here",
  });
  tippy("#myButton3", {
    content: "Add Text here",
  });
  tippy("#myButton4", {
    content: "Add Text here",
  });
  tippy("#myButton5", {
    content: "Add Text here",
  });
  tippy("#myButton6", {
    content: "Add Text here",
  });
  const myStyle = {
    height: 70,
    fontSize: 45,
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
  };
  return (
    <div>
      <div
        className="card-group"
        style={{
          backgroundColor: "rgb(33 37 41)",
        }}
      >
        <Link className="card" to={"/"}>
          <HomeIcon id="#myButton1" style={myStyle} />
        </Link>

        <Link className="card" to={"services"}>
          <LocalPoliceIcon style={myStyle} />
        </Link>

        <Link className="card" to={"centers"}>
          <BusinessCenterIcon style={myStyle} />
        </Link>

        <Link className="card" to={"contact"}>
          <AddIcCallIcon style={myStyle} />
        </Link>

        <Link className="card" to={"sign-in"}>
          <VpnKeyIcon style={myStyle} />
        </Link>

        <Link className="card" to={"sign-up"}>
          <ExitToAppIcon style={myStyle} />
        </Link>
      </div>
    </div>
  );
}
