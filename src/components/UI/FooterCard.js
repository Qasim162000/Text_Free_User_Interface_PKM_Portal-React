import React from "react";
import { Link } from "react-router-dom";
import "../../styles/FooterCard.css";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PublicIcon from '@mui/icons-material/Public';
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


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
    height: 80,
    fontSize: 80,
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
          <HomeIcon style={myStyle} />
        </Link>

        <Link className="card" to={"services"}>
          <LocalPoliceIcon style={myStyle} />
        </Link>

        <Link className="card" to={"centers"}>
          <BusinessCenterIcon style={myStyle} />
        </Link>

        <Link className="card" to={"global"}>
          <PublicIcon style={myStyle} />
        </Link>

        <Link className="card" to={"sign-in"}>
          <VpnKeyIcon style={myStyle} />
        </Link>

        <Link className="card" to={"sign-out"}>
          <ExitToAppIcon style={myStyle} />
        </Link>
      </div>
    </div>
  );
}