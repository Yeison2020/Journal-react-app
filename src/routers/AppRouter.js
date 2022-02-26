import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { firebase } from "../firebase/firebaseConfig";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, []);

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route path="/" component={JournalScreen} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
