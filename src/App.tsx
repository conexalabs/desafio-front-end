import React from 'react';
import MainRouter from './components/MainRouter';
import { EmpresaProvider } from './contexts/EmpresaContext';
import './index.scss';

function App() {
  return (
    <div className="container">
      <EmpresaProvider>
        <MainRouter />
      </EmpresaProvider>
    </div>
  );
}

export default App;