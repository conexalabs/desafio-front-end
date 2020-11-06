import * as Yup from 'yup';
import { cnpj } from 'cpf-cnpj-validator';

export async function validateCnpj(cnpjValue: string): Promise<Boolean> {
  if (!cnpjValue) {
    throw new Error('Insira um valor para pesquisar');
  }

  const schemaNumber = Yup.number();

  const cnpjIsNumber = await schemaNumber.isValid(cnpjValue);

  if (!cnpjIsNumber) {
    throw new Error('Digite apenas números para buscar o CNPJ');
  }

  const schema = Yup.object().shape({
    cnpj: Yup.string().min(14, 'Um CNPJ precisa conter 14 dígitos'),
  });

  await schema.validate({ cnpj: cnpjValue }, { abortEarly: false });

  if (!cnpj.isValid(cnpjValue)) {
    throw new Error('CNPJ inválido');
  }

  return true;
}
