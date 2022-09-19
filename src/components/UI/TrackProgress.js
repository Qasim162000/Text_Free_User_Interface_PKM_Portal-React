import React from "react";

export default function TrackProgress() {
  return (
    <>
      <h1>Logic left</h1>
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
