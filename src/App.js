import React from "react";
import "./App.css";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import { BrowserRouter as Router, Route } from "react";
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
      <Router>       
      <Navbar />
<<<<<<< HEAD
      <Switch>
        <Route path = "/" component={<Home />} />
        {/* <Route path = "/Services" component= {<Servicee />} /> */}
      </Switch>
=======
        <Route path = "/" exact element={<Home />} />
        <Route path = "Services" exact element={<Services />} />
        <Route path = "Centers" exact element={<Centers />} />
        <Route path = "Global" exact element={<Global />} />
        <Route path = "SignIn" exact element = {<SignIn/>} />
        <Route path = "SignOut" exact element = {<SignOut/>} />
        <Route path = "Track" exact element = {<Track/>} />
        <Route path = "Verify" exact element = {<Verify/>} />

>>>>>>> 4d7a187b883d1b2199a8fcbf2190294c5a8c7d37
      <Footer />
      </Router>
    </div>
  );
}

export default App;
