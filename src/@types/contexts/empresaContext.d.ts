/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />

namespace Contexts {
  interface EmpresaContext {
    empresas: Models.Empresa[];
    setEmpresas: React.Dispatch<React.SetStateAction<Models.Empresa[]>>;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
    setMessageError: React.Dispatch<React.SetStateAction<string>>;
    selecionada: Models.Empresa;
    setSelecionada: React.Dispatch<React.SetStateAction<Models.Empresa>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    buscarEmpresas: (cnpj: string) => void;
  }
}