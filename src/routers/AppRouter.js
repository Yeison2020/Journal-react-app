import React, { useEffect, useState } from "react";
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
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { loadNotes } from "../helpers/loadNotes";
import { setNotes } from "../actions/notes";
import { startLaodingNotes } from "../actions/notes";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);

  // Here My isLoggedIn will controll who see my current routes
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Here is how I'm adding my current users to my redux states using this useEffect Notes: I need to fixed when user try to log in and Gets an errors in the UI login like password or incorrect email. There is a bug there when the btn gets the loading state.
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        dispatch(login(user.uid, user.displayName));
        dispatch(startLaodingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      // Importan how I setted this to wait and load another component until I get the answer from my UseEffect
      setChecking(false);
    });
  }, [dispatch]);
  if (checking) {
    return <h1>Please Wait retrive Your data</h1>;
  }

  return (
    <>
      <Router>
        <div>
          <Switch>
            <PrivateRoute
              exact
              isAuthenticated={isLoggedIn}
              path="/"
              component={JournalScreen}
            />
            <PublicRoute
              exact
              isAuthenticated={isLoggedIn}
              component={AuthRouter}
            />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
