import ValidateCNPJ from '../../utils';

describe('Testing CNPJ Validation', () => {
  it('should be false if CNPJ is fully same numbers', () => {
    expect(ValidateCNPJ('00000000000000')).toBe(false);
    expect(ValidateCNPJ('11111111111111')).toBe(false);
    expect(ValidateCNPJ('22222222222222')).toBe(false);
    expect(ValidateCNPJ('33333333333333')).toBe(false);
    expect(ValidateCNPJ('44444444444444')).toBe(false);
    expect(ValidateCNPJ('55555555555555')).toBe(false);
    expect(ValidateCNPJ('66666666666666')).toBe(false);
    expect(ValidateCNPJ('77777777777777')).toBe(false);
    expect(ValidateCNPJ('88888888888888')).toBe(false);
    expect(ValidateCNPJ('99999999999999')).toBe(false);
  });
  it('should be false if CNPJ is null', () => {
    expect(ValidateCNPJ(null)).toBe(false);
  });
  it('should be false if CNPJ is blank', () => {
    expect(ValidateCNPJ('')).toBe(false);
  });
  it('should be false if CNPJ has characters', () => {
    expect(ValidateCNPJ('aaaaaaaaaaaaaa')).toBe(false);
  });
  it('should be true if CNPJ is valid', () => {
    expect(ValidateCNPJ('02435301000416')).toBe(true);
  });
});
