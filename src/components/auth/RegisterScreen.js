import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const RegisterScreen = () => {
  const [values, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = values;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password, password2);
  };
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleFormSubmit}>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        ></input>
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          autoComplete="off"
          value={password2}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>

        <Link to="/auth/login" className="link mt-5">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
