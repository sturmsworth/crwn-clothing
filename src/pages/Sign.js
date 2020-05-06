import React from "react";

import "../styles/Sign.scss";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Sign = () => {
  return (
    <div className="sign-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Sign;
