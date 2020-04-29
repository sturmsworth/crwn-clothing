import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route path="/hats/:hatsId" component={HatsPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
