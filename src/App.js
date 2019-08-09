import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './screens/Home';
import CompanyShow from './screens/CompanyShow';

function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/company' component={CompanyShow}/>
      </Switch>
      <GlobalStyle/>
    </BrowserRouter>
);
}

export default App;
