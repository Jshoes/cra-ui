import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ModuleCreator from "./modules/moduleCreator";
import Packages from './modules/Packages';

function App() {
  addOwnListener()
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ModuleCreator} />
        <Route exact path="/modulecreate" component={ModuleCreator} />
        <Route exact path="/packages" component={Packages} />
      </Switch>
    </Router>
  );
}

function addOwnListener() {
  window.addEventListener('message', event => {
    const message = event.data; // The JSON data our extension sent

    switch (message.command) {
        case 'changeRouter':
            console.log('message:changeRouter:', JSON.stringify(message.text))
            if (typeof message.text === 'string') {
              window.location.hash = message.text
            }
            break;
    }
});
}

export default App;
