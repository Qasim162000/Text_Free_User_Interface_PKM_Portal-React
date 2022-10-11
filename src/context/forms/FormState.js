import formContext from "./formContext";

const FormState = (props) => {
  const state = {
    name: "Qasim",
    class: "10b",
  };

  return (
    <formContext.Provider value={state}>{props.children}</formContext.Provider>
  );
};

export default FormState;
