import React, { createContext, useState } from "react";
import FadeLoading from "../components/FadeLoading/FadeLoading";
import apiCNPJ from "../utils/apiCNPJ";
import UseLocalStorage from "../hooks/UseLocalStorage";
import { Collapse } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const EmpresaContext = createContext({} as Contexts.EmpresaContext);

export const EmpresaProvider: React.FC = ({ children }) => {
  const [empresas, setEmpresas] = UseLocalStorage("empresasStorage", [] as Models.Empresa[]);
  const [loading, setLoading] = useState(false);
  const [selecionada, setSelecionada] = UseLocalStorage("empresaSelecionadaStorage", {} as Models.Empresa);
  const [openAlert, setOpenAlert] = useState(false);
  const [messageError, setMessageError] = useState('');

  const buscarEmpresas = async (cnpj: string) => {
    setLoading(true)
    try {
      const { data } = await apiCNPJ.get(`/cnpj/${cnpj}`);
      setEmpresas((old) => [...old, data]);
      return;
    } catch (err) {
      console.error("erro ao buscar empresas", { err });
      setOpenAlert(true);
      setMessageError("Esse CNPJ não existe");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmpresaContext.Provider value={{ empresas, setEmpresas, buscarEmpresas, setOpenAlert, setMessageError, selecionada, setSelecionada, setLoading }}>
      <FadeLoading loading={loading} />
      <Collapse in={openAlert}>
        <Alert
          variant="filled"
          severity="error"
        >
          {messageError}
        </Alert>
      </Collapse>
      {children}
    </EmpresaContext.Provider>
  );
};


export default EmpresaContext;