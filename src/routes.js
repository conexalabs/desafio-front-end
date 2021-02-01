import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import home from './Pages/Home/home'
import Maps from './Pages/Maps/maps'

import { Provider } from 'react-redux'

import { store, persistor } from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'

const Routes = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <BrowserRouter>
          <Switch>
            <Route component={home} path='/' exact />
            <Route component={Maps} path='/maps' />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default Routes