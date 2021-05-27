import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Empresa from '../pages/Empresa'

const Routes = () => {
    return (
        <Switch>
           <Route path={'/desafio-dev'} exact component={Dashboard} />
           <Route path={'/Empresa'} component={Empresa} />
        </Switch>
    )
}

export default Routes