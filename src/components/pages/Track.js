import React from "react";
import TrackProgress from "../UI/TrackProgress";

export default function Track(props) {
  document.title = "PKM Punjab - Track Progress";
  return (
    <div className="container py-5" {...props.changeProgress(100)}>
      <TrackProgress />
    </div>
  );
}
