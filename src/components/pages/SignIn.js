import React, { useState } from "react";
import validator from "validator";

export default function SignIn(props) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  props.changeProgress(20);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };
  props.changeProgress(40);

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p
                        {...props.changeProgress(60)}
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                      >
                        Sign in
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 pb-5 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label pb-2"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>

                            <div>
                              <input
                                className="form-control"
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleChange}
                              />

                              {error && <p style={{ color: "red" }}>{error}</p>}
                            </div>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 pb-5 mb-2 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label pb-2"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>

                            <div>
                              <pre>
                                <input
                                  type="password"
                                  className="form-control"
                                  onChange={(e) => validate(e.target.value)}
                                ></input>{" "}
                                <br />
                                {errorMessage === "" ? null : (
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      color: "red",
                                    }}
                                  >
                                    {errorMessage}
                                  </span>
                                )}
                              </pre>
                            </div>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            {...props.changeProgress(80)}
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Remember me
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Sign In
                          </button>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Not a member? <a href="/sign-up">Register</a>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        {...props.changeProgress(100)}
                        src="https://img.freepik.com/premium-vector/login-form-template_123447-475.jpg?w=2000"
                        className="img-fluid"
                        alt="Login-page"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
