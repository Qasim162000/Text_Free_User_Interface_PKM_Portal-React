import React, { useContext } from "react";
import formContext from "../../context/forms/formContext.js";
import Formitem from "../UI/Formitem.js";

const MyForms = () => {
  const context = useContext(formContext);
  const { forms } = context;
  return (
    <div className="row my-5">
      <h1>My Form Subsmissions</h1>
      {forms.map((form) => {
        return <Formitem key={form.id} form={form} />;
      })}
    </div>
  );
};

export default MyForms;
