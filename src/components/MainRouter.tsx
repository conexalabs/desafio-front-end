import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Maps from "../pages/Maps";


const MainRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>

        <Redirect exact from="/" to="home" />

        <Route path="/maps">
          <Maps />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;