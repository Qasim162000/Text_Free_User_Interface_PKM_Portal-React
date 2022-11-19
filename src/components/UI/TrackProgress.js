import React from "react";

export default function TrackProgress() {
  return (
    <>
      <h1>Track Progress of a submitted Form for any service</h1>
      {/* Show the progress endpoint from the backend - simple (with some details for a pleasing look), nothing else */}
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-label="Example with label"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
    </>
  );
}
