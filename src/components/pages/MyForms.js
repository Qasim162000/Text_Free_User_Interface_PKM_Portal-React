import React, { useContext, useState } from "react";
import formContext from "../../context/forms/formContext.js";
import Formitem from "../UI/Formitem.js";

const MyForms = () => {
  const context = useContext(formContext);
  const { addForm, forms } = context;

  const [form, setForm] = useState({ subject: "", message: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addForm(form.subject, form.message);
  };
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="my-5">
        <h1>Add a Form</h1>
        <form
          className="col-7 text-start"
          style={{
            margin: "auto",
          }}
        >
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              className="form-control"
              id="subject"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Message
            </label>
            <input
              name="message"
              type="text"
              className="form-control"
              id="message"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Form
          </button>
        </form>
      </div>
      <div className="row my-5">
        <h1>My Form Subsmissions</h1>
        {forms.map((form) => {
          return <Formitem key={form.id} form={form} />;
        })}
      </div>
    </>
  );
};

export default MyForms;
