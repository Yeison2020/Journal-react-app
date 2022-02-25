import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";
const LoginScreen = () => {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    email: "enmanuelquiterios@gmail.com",
    password: 123456,
  });

  const { email, password } = values;
  const handleLogin = (e) => {
    e.preventDefault();

    // Here the dispatch get acess to my store and changes state in redux
    dispatch(startLoginEmailPassword(email, password, setLogin));

    console.log(email, password);
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social google</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create new Account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
