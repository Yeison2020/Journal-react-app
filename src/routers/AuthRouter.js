import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../component/auth/LoginScreen";
import RegisterScreen from "../component/auth/RegisterScreen";
const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route path="/auth/register" component={RegisterScreen} />
        <Redirect to="/auth/register" />
      </Switch>
    </div>
  );
};

export default AuthRouter;
