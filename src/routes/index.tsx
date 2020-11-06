import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MapLocation from '../pages/MapLocation';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/localization" component={MapLocation} />
  </Switch>
);

export default Routes;
