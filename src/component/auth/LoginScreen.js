import React from "react";

const LoginScreen = () => {
  return (
    <>
      <h3>Login</h3>
      <form>
        <input type="text" placeholder="email" name="email"></input>
        <input type="password" placeholder="password" name="password"></input>
        <button type="submit">Login</button>
        <hr />
        Google
      </form>
    </>
  );
};

export default LoginScreen;
