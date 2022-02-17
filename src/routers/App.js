import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/auth"></Route>
        <Route path="/*"></Route>
      </Switch>
    </>
  );
};

export default App;
