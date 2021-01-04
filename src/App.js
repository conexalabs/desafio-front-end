import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom'

//Css
import 'bootstrap/dist/css/bootstrap.css'
import './css/styled.scss'

//Components
import Header from './components/header'
import Map from './components/map'

function App() {
	return (
		<HashRouter basename={process.env.REACT_APP_URL_PUBLIC}>
			<Switch>
				<Route exact={true} path={`/`} component={Header}></Route>
				<Route path={`/maps/:cidade/:uf/:cep/:endereco/:empresa/:cnpj`} component={Map}></Route>
			</Switch>
		</HashRouter>
	)
}

export default App;
