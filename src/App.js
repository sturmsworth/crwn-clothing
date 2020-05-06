import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { auth, createUserDocument } from "./utils/firebase";

import "./App.css";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import Sign from "./pages/Sign";

class App extends Component {
  state = {
    currentUser: null,
  };

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user,
    });
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        this.setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

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
  }
}

export default App;
