import React, { createContext, useContext, useCallback } from "react";

const CompanyContext = createContext();

const CompanyProvider = ({ children }) => {
  const addCompany = useCallback(async (company) => {
    const companies =
      JSON.parse(localStorage.getItem("@Conexa:companies")) || [];

    companies.push(company);

    localStorage.setItem("@Conexa:companies", JSON.stringify(companies));
  }, []);

  const getCompanies = useCallback(() => {
    return JSON.parse(localStorage.getItem("@Conexa:companies")) || [];
  }, []);

  return (
    <CompanyContext.Provider value={{ addCompany, getCompanies }}>
      {children}
    </CompanyContext.Provider>
  );
};

function useCompany() {
  const context = useContext(CompanyContext);

  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }

  return context;
}

export { CompanyProvider, useCompany };
