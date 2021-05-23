import { Main } from "./components/Main";
import { Map } from "./components/Maps";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { IEmpresa } from "./interface/empresa";

export function App() {
  const [empresa, setEmpresa] = useState<IEmpresa>({
    razaoSocial: "",
    endereco: "",
    CNPJ: "",
  });

  const empresaDados = (empresaDados: IEmpresa) => {
    setEmpresa(empresaDados);
  };

  return (
    <Router>
      <Route exact path="/">
        <Main dadosEmpresa={empresaDados} />
      </Route>
      <Route path="/map">
        <Map empresa={empresa} />
      </Route>
    </Router>
  );
}
