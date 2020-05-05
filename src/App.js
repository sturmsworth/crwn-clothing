import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { auth } from "./utils/firebase";

import "./App.css";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import Sign from "./pages/Sign";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = () => null;

    unsubscribeFromAuth = () =>
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
      });

    unsubscribeFromAuth();
  });

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/sign" component={Sign} />
      </Switch>
    </div>
  );
};

export default App;
