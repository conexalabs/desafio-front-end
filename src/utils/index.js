export default function ValidateCNPJ(_cnpj) {
  let cnpj = _cnpj;
  if (!cnpj || cnpj === '' || cnpj.length < 14) return false;
  if (cnpj === '00000000000000'
      || cnpj === '11111111111111'
      || cnpj === '22222222222222'
      || cnpj === '33333333333333'
      || cnpj === '44444444444444'
      || cnpj === '55555555555555'
      || cnpj === '66666666666666'
      || cnpj === '77777777777777'
      || cnpj === '88888888888888'
      || cnpj === '99999999999999') return false;

  const valida = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let dig1 = 0;
  let dig2 = 0;

  const exp = /\.|-|\//g;
  cnpj = cnpj.toString().replace(exp, '');
  const digito = parseInt(cnpj.charAt(12) + cnpj.charAt(13), 10);

  for (let i = 0; i < valida.length; i += 1) {
    dig1 += (i > 0 ? (cnpj.charAt(i - 1) * valida[i]) : 0);
    dig2 += cnpj.charAt(i) * valida[i];
  }
  dig1 = (((dig1 % 11) < 2) ? 0 : (11 - (dig1 % 11)));
  dig2 = (((dig2 % 11) < 2) ? 0 : (11 - (dig2 % 11)));

  if (((dig1 * 10) + dig2) !== digito) return false;
  return true;
}
