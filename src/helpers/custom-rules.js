export default {
  cpfRules: (cpf) => {
    cpf = cpf.split('.').join('').split('-').join('')
    let interaction
    const s = cpf
    cpf = s.substr(0, 9)
    const SecondDigitValidation = s.substr(9, 2)
    let validationFirstDigit = 0
    let v = false
    for (interaction = 0; interaction < 9; interaction++) {
      validationFirstDigit += cpf.charAt(interaction) * (10 - interaction)
    }
    /* eslint-disable */
    if (s === '11111111111' || s === '22222222222' || s === '33333333333' || s === '44444444444' ||
    s === '55555555555' || s === '66666666666' || s === '77777777777' || s === '88888888888' || s === '99999999999') {
      v = true
      return false
    }
    if (validationFirstDigit === 0) {
      v = true
      return false
    }
    validationFirstDigit = 11 - (validationFirstDigit % 11)
    if (validationFirstDigit > 9) validationFirstDigit = 0
    if (SecondDigitValidation.charAt(0) != validationFirstDigit) {
      v = true
      return false
    }
    validationFirstDigit *= 2
    for (interaction = 0; interaction < 9; interaction++) {
      validationFirstDigit += cpf.charAt(interaction) * (11 - interaction)
    }
    validationFirstDigit = 11 - (validationFirstDigit % 11)
    if (validationFirstDigit > 9) validationFirstDigit = 0
    if (SecondDigitValidation.charAt(1) != validationFirstDigit) {
      v = true
      return false
    }
    if (!v) {
      v = false
      return true
    }
  },
  cnpjRules (cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;

    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    let length = cnpj.length - 2
    let numbers = cnpj.substring(0,length);
    let digits = cnpj.substring(length);
    let sum = 0;
    let position = length - 7;
    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * position--;
      if (position < 2)
            position = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(0))
        return false;

    length = length + 1;
    numbers = cnpj.substring(0,length);
    sum = 0;
    position = length - 7;
    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * position--;
      if (position < 2)
            position = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(1))
          return false;

    return true;
  },
}