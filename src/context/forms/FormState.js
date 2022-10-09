import FormContext from "./FormContext";

const FormState = (props) => {
  const state = {
    name: "Qasim",
    class: "10b",
  };
  return (
    <FormContext.Provider value={state}>{props.children}</FormContext.Provider>
  );
};

export default FormState;
