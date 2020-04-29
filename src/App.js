import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
