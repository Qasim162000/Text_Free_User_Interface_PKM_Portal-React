import React, { useState } from "react";
import "./styles/App.css";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Centers from "./components/pages/Centers";
import Services from "./components/pages/Services";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Track from "./components/pages/Track";
import Verify from "./components/pages/Verify";
import Contact from "./components/pages/Contact";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [link, setLink] = useState("");
  const [progress, setProgress] = useState(0);
  const sendLink = (event) => {
    setLink(event.target.href);
  };
  let changeProgress = async (progress) => {
    await setProgress(progress);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar onClick={sendLink} />
        <Routes>
          <Route path="/" element={<Home changeProgress={changeProgress} />} />
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
            path="sign-in"
            element={<SignIn changeProgress={changeProgress} />}
          />
          <Route
            path="sign-up"
            element={<SignUp changeProgress={changeProgress} />}
          />
          <Route
            path="track"
            element={<Track changeProgress={changeProgress} />}
          />
          <Route
            path="verify"
            element={<Verify changeProgress={changeProgress} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
