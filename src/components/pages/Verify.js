import React from "react";

export default function Verify(props) {
  document.title = "PKM Punjab - Verify Progress";
  return <div {...props.changeProgress(100)}>Verify</div>;
}
