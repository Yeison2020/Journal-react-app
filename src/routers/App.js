import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JournalScreen from "../component/journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" component={<AuthRouter />} />
          <Route path="/" componet={<JournalScreen />} />\
        </Switch>
      </Router>
    </>
  );
};

export default App;
