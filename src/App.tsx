import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import { ContextProvider } from './context/Context';

const App: React.FC = () => (
  <ContextProvider>
    <Router>
      <Routes />
    </Router>
  </ContextProvider>
);

export default App;
