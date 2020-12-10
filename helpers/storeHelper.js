const storeHelper = function () {

  return { parseCompany };

  function parseCompany(data) {
    const { parseCnpj } = cnpjValidator;
    const { nome, cnpj, logradouro, numero, bairro, municipio, uf } = data;

    return {
      cnpj,
      cnpjNumber: parseCnpj(cnpj),
      name: capitalize(nome),
      address: [
        logradouro,
        numero,
        bairro,
        municipio,
      ].map(element => capitalize(element)).join(', ').concat('-', uf),
    }
  }

  function capitalize(str) {
    return str.split(' ').map(e => _.upperFirst(e.toLowerCase())).join(' ');
  }
}();