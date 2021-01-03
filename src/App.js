import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Css
import 'bootstrap/dist/css/bootstrap.css'
import './css/styled.scss'

//Components
import Header from './components/header'
import Map from './components/map'

// const path = process.env.NODE_ENV === "development" ?
// 	process.env.REACT_APP_URL_LOCAL : process.env.REACT_APP_URL_PUBLIC

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact={true} path={`/`} component={Header}></Route>
				<Route path={`/maps/:cidade/:uf/:cep/:endereco/:empresa/:cnpj`} component={Map}></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App;
