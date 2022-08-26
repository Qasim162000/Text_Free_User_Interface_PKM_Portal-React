import React from "react";

export default function Track(props) {
  document.title = "PKM Punjab - Track Progress";
  return <div {...props.changeProgress(100)}>Track</div>;
}
