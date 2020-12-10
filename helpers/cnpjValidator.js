const cnpjValidator = function() {

  return {
    checkDigit,
    parseCnpj,
    validateCnpj
  };

  function validateCnpj(cnpj) {
    var cnpjNumber = parseCnpj(cnpj)
    var partial = Math.floor(cnpjNumber / 100);

    var dv1 = checkDigit(partial);
    var dv2 = checkDigit(partial * 10 + dv1);
    var number = partial * 100 + dv1 * 10 + dv2;

    return number > 0 && number === cnpjNumber;
  }

  function parseCnpj(keyword) {
    if(typeof keyword == 'number') return keyword;

    if(typeof keyword == 'string') {
      var tokens = keyword.match(/\d+/g);
      return (tokens === null) ? 0 : parseInt(tokens.join(''));
    }

    return 0;
  }

  function checkDigit(partial) {
    var acc = 0;

    while(partial) {
      for(var i=2; i<=9; i++) {
        acc += (partial % 10) * i;
        partial = Math.floor(partial / 10);
      }
    } acc %= 11;

    return (acc < 2) ? 0 : 11 - acc;
  }
}();
