import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithNameEmailPassowrd } from "../../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [values, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = values;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is requiered"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));

      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError("Password should be at least 5 chart and mathc each other")
      );

      return false;
    }
    dispatch(removeError());
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("Form is Corrent");
    }
  };
  const handleRegisterClick = () => {
    dispatch(startRegisterWithNameEmailPassowrd(email, password, name));
  };
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
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
        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          onClick={handleRegisterClick}
        >
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
