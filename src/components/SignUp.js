import React, { useState } from "react";

import "../styles/SignUp.scss";

import { auth, createUserDocument } from "../utils/firebase";

import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

const SignUp = () => {
  const initialState = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [signupInput, setSignupInput] = useState(initialState);

  const { fName, lName, email, password, confirmPassword } = signupInput;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(
        "Passwords don't match. Please ensure both fields are the same and try again."
      );
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { fName, lName });

      setSignupInput(initialState);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with an email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="fName"
          value={fName}
          onChange={handleChange}
          label="First Name"
          required
        />
        <FormInput
          type="text"
          name="lName"
          value={lName}
          onChange={handleChange}
          label="Last Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
