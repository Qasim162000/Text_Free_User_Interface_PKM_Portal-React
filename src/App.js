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

function App() {
  const [link, setLink] = useState("");
  const sendLink = (event) => {
    setLink(event.target.href);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar onClick={sendLink} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services link={link} />} />
          <Route path="centers" element={<Centers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="track" element={<Track />} />
          <Route path="verify" element={<Verify />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
