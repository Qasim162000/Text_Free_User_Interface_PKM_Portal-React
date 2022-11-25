import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";

import Home from "./components/pages/Home";
import Centers from "./components/pages/Centers";
import Services from "./components/pages/Services";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import LoadingBar from "react-top-loading-bar";
import PageNotFound from "./components/pages/Error404";
import FormState from "./context/forms/FormState";
import MyForms from "./components/pages/MyForms";
import Alert from "./components/UI/Alert";

export default function App() {
  useEffect(() => {
    changeProgress();
  }, []);

  const [link, setLink] = useState("");
  const [progress, setProgress] = useState(0);
  const sendLink = (event) => {
    setLink(event.target.href);
    console.log(event);
  };
  const changeProgress = (progress) => {
    setProgress(progress);
  };
  return (
    <div className="App">
      <FormState>
        <BrowserRouter>
          <LoadingBar color="#f11946" progress={progress} />
          <Navbar onClick={sendLink} />
          <Alert message="Yet to be set" />
          <Routes>
            <Route
              path="/"
              element={<Home changeProgress={changeProgress} />}
            />
            <Route
              path="services"
              element={<Services changeProgress={changeProgress} link={link} />}
            />
            <Route
              path="centers"
              element={<Centers changeProgress={changeProgress} />}
            />
            <Route
              path="contact"
              element={<Contact changeProgress={changeProgress} />}
            />
            <Route
              path="myformsubmissions"
              element={<MyForms changeProgress={changeProgress} />}
            />
            <Route
              path="sign-in"
              element={<SignIn changeProgress={changeProgress} />}
            />
            <Route
              path="sign-up"
              element={<SignUp changeProgress={changeProgress} />}
            />

            <Route
              path="*"
              element={<PageNotFound changeProgress={changeProgress} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FormState>
    </div>
  );
}
