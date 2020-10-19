import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ModuleCreator from "./modules/moduleCreator";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/modulecreate" component={ModuleCreator} />Î
      </Switch>
    </Router>
  );
}

export default App;
