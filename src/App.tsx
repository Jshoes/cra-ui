import React from "react";
import { HashRouter as Router, Route, Switch ,Redirect} from "react-router-dom";
import ModuleCreator from "./modules/moduleCreator";
import Packages from './modules/Packages';

function App() {
  addOwnListener()
  return (
    <Router>
      <Switch>
        <Route exact path="/modulecreate" component={ModuleCreator} />
        <Route exact path="/packages" component={Packages} />
        <Redirect path="/" to="modulecreate"/>
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
        case 'installStatus':
            console.log('==installStatus==', message.text)
            break;
        default:
          console.log('unknow command', message.command, ', data is', message.text);
          return;
    }
});
}

export default App;
