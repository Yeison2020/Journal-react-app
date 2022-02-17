import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JournalScreen from "../component/journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/auth" component={<AuthRouter />} />
        <Route path="/auth" componet={<JournalScreen />} />
      </Switch>
    </>
  );
};

export default App;
