import React from "react";
import { Link } from "react-router-dom";
import "../../styles/FooterCard.css";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import SaveIcon from "@mui/icons-material/Save";

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
        <Link className="card" to={"services"}>
          <SaveIcon style={myStyle} />
        </Link>

        <Link className="card" to={"services"}>
          <SaveIcon style={myStyle} />
        </Link>

        <Link className="card" to={"services"}>
          <SaveIcon style={myStyle} />
        </Link>

        <Link className="card" to={"services"}>
          <SaveIcon style={myStyle} />
        </Link>

        <Link className="card" to={"services"}>
          <SaveIcon style={myStyle} />
        </Link>

        <Link className="card" to={"services"}>
          <SaveIcon style={myStyle} />
        </Link>
      </div>
    </div>
  );
}
