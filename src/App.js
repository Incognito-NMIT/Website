import React from "react";
import Menu from "./components/Menu";
import Team from "./components/Core_Team/Team";
import About from "./components/About_us/About";
import Contact from "./components/Contact_us/ContactUs";
import Home from "./components/Home";
import ScrollToUp from "./components/ScrollToTop";

import { BrowserRouter, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <>
  <BrowserRouter>
  <ScrollToUp/>
      <Menu />
      <Switch>
        <Route path="/Incognito-Website" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Team" exact component={Team} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
        
      </>
  );
};

export default App;
