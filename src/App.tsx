import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ModuleCreator from "./modules/moduleCreator";
import Packages from './modules/Packages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/modulecreate" component={ModuleCreator} />Î
        <Route path="/packages" component={Packages} />
      </Switch>
    </Router>
  );
}

export default App;
