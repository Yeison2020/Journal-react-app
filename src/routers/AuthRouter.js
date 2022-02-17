import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../component/auth/LoginScreen";
import RegisterScreen from "../component/auth/RegisterScreen";
const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/auth/login" component={<LoginScreen />} />
        <Route path="/auth/register" component={<RegisterScreen />} />
        <Route path="/*">
          <Redirect to="/auth/login" />
        </Route>
      </Switch>
    </>
  );
};

export default AuthRouter;
