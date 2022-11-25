import React from "react";

const Formitem = (props) => {
  const { form } = props;
  return (
    <div className="col-md-4">
      <div className="card my-3 container" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <b>Subject:</b> {form.subject}
          </h5>
          <p className="card-text">
            <b>Message:</b> {form.message}
          </p>
          <i className="fa-solid fa-trash mx-1"></i>
          <i className="fa-solid fa-edit mx-1"></i>
        </div>
      </div>
    </div>
  );
};

export default Formitem;
