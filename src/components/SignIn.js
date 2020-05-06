import React, { useState } from "react";

import "../styles/SignIn.scss";

import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton";

import { auth, signInWithGoogle } from "../utils/firebase";

const SignIn = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formEntries, setFormEntries] = useState(initialState);

  const { email, password } = formEntries;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormEntries(initialState);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormEntries((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="sign-in">
      <h2>I ALREADY HAVE AN ACCOUNT</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
        />

        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton onClick={null}>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
