import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Mapa from './pages/Mapa/Mapa';
import NotFound from './pages/NotFound/NotFound';

// Components

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/mapa/:cnpj" component={Mapa} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
};

export default Routes;
