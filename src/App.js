import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes"

const App = () => {
  return(
    <Router>
      <Switch>
          {Routes.map((route) => (
            <Route path={route.path} exact={route.exact} component={route.component} />
          ))}
      </Switch>
    </Router>
  );
}

export default App;
