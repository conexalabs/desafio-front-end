export const formatCnpj = (cnpj) => {
    const result = cnpj.substr(0,2) + "." + cnpj.substr(3,3) + "." + cnpj.substr(5,3) + "/" + cnpj.substr(8,4) + "-" + cnpj.substr(12,13)
    return result
}    