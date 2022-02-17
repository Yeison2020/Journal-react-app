import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "../component/auth/LoginScreen";
const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login" component={<LoginScreen />} />
        <Route path="/" component={<AuthRouter />} />
      </Switch>
    </div>
  );
};

export default AuthRouter;
