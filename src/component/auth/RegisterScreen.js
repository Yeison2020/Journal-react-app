import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        ></input>
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        ></input>

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
        ></input>
        <input
          className="auth__input"
          type="password"
          placeholder="Password Confirmation"
          name="password_confirmation"
          autoComplete="off"
        ></input>
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>

        <Link to="/auth/register" className="link mt-5">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
