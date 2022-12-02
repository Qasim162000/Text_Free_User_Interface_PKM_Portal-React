import { useState } from "react";
import formContext from "./formContext";

const FormState = (props) => {
  const formsInitial = [
    {
      _id: "63424239f676091615ee90ae8",
      user: "632926b42e419b049affcdbe",
      subject: "Meowww",
      message: "dasdasdasdsd",
      progress: "Submitted",
      date: "2022-10-09T03:44:31.614Z",
      __v: 0,
    },
    {
      _id: "6342439f6736091615ee90ae8",
      user: "632926b42e419b049affcdbe",
      subject: "Meowww2",
      message: "dasdasdasdsd",
      progress: "Submitted",
      date: "2022-10-09T03:44:31.614Z",
      __v: 0,
    },
    {
      _id: "6342439f6760491615ee90ae8",
      user: "632926b42e419b049affcdbe",
      subject: "Meowww3",
      message: "dasdasdasdsd",
      progress: "Submitted",
      date: "2022-10-09T03:44:31.614Z",
      __v: 0,
    },
    {
      _id: "6342439f6760591615ee90ae8",
      user: "632926b42e419b049affcdbe",
      subject: "Meowww3",
      message: "dasdasdasdsd",
      progress: "Submitted",
      date: "2022-10-09T03:44:31.614Z",
      __v: 0,
    },
    {
      _id: "6342439f6760916615ee90ae8",
      user: "632926b42e419b049affcdbe",
      subject: "Meowww3",
      message: "dasdasdasdsd",
      progress: "Submitted",
      date: "2022-10-09T03:44:31.614Z",
      __v: 0,
    },
    {
      _id: "6342439f6760917615ee90ae8",
      user: "632926b42e419b049affcdbe",
      subject: "Meowww3",
      message: "dasdasdasdsd",
      progress: "Submitted",
      date: "2022-10-09T03:44:31.614Z",
      __v: 0,
    },
    {
      _id: "6342439f6760918615ee90ae8",
      user: "632926b42e419b049affcdbe",
      subject: "Meowww3",
      message: "dasdasdasdsd",
      progress: "Submitted",
      date: "2022-10-09T03:44:31.614Z",
      __v: 0,
    },
    {
      _id: "6342439f676091615ee990ae8",
      user: "632926b42e419b049affcdbe",
      subject: "Meowww3",
      message: "dasdasdasdsd",
      progress: "Submitted",
      date: "2022-10-09T03:44:31.614Z",
      __v: 0,
    },
  ];

  //Add a Form
  const addForm = (subject, message) => {
    //TODO: API CALL
    const form = {
      _id: "6342439f676091615ee990ae8",
      user: "632926b42e419b049afsfcdbe",
      subject: subject,
      message: message,
      progress: "Submitted",
      date: "2022-10-09T03:44:31.614Z",
      __v: 0,
    };
    setForms(forms.concat(form));
  };
  //Delete a Form
  const deleteForm = (id) => {};
  //Edit a Form
  const editForm = () => {};

  const [forms, setForms] = useState(formsInitial);
  return (
    <formContext.Provider
      value={{ forms, addForm, setForms, deleteForm, editForm }}
    >
      {props.children}
    </formContext.Provider>
  );
};

export default FormState;
