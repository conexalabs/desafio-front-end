import React from "react";

import "./styles/global.scss";

import { CompanyProvider } from "./hooks/company";
import Routes from "./routes";

const App = () => (
  <CompanyProvider>
    <Routes />
  </CompanyProvider>
);

export default App;
