import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Mapa from './pages/Mapa/Mapa';

// Components

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/mapa" exact component={Mapa} />
            </Switch>
        </Router>
    )
};

export default Routes;
