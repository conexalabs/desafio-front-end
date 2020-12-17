import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Localization from "../pages/Localization";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/localization">
        <Localization />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
