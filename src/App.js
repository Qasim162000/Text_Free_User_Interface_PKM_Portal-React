import React from "react";
import "./styles/App.css";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Centers from "./components/pages/Centers";
import Services from "./components/pages/Services";
import SignIn from "./components/pages/SignIn";
import SignOut from "./components/pages/SignOut";
import Track from "./components/pages/Track";
import Verify from "./components/pages/Verify";
import Global from "./components/pages/Global";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="Centers" element={<Centers />} />
          <Route path="Global" element={<Global />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignOut" element={<SignOut />} />
          <Route path="Track" element={<Track />} />
          <Route path="Verify" element={<Verify />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
