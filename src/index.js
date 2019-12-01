/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { CompanyProvider } from './context/Company';
import Main from './pages/Main';
import * as serviceWorker from './serviceWorker';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '30px',
  transition: transitions.SCALE,
};

const App = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <CompanyProvider>
      <Main />
    </CompanyProvider>
  </AlertProvider>
);

ReactDOM.render(<App />, document.getElementById('root') || document.createElement('div'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default App;
