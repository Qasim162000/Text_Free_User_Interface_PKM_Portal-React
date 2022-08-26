import React from "react";

export default function Track(props) {
  return <div {...props.changeProgress(100)}>Track</div>;
}
