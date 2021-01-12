export const checkCNPJ = (cnpj) => {
    const cnpj2 = cnpj.replace(/[^\d]+/g, '')

    if(cnpj === ""){
        return false
    }

    if(cnpj2.length !== 14){
        return false
    }

    console.log(cnpj2)

    return cnpj2
}