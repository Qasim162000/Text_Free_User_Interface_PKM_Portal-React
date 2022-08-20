import React from "react";
import "./App.css";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>       
      <Navbar />
      <Switch>
        <Route path = "/" component={<Home />} />
        {/* <Route path = "/Services" component= {<Servicee />} /> */}
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
