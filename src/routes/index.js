import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Map from '../pages/Map';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/map" exact component={Map} />
    </Switch>
  );
}

export default Routes;
