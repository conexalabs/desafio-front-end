import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import Card from '../../components/Card';
import { ICompanyObject } from '../../utils/interfacesData';

const company: ICompanyObject = {
  cnpj: '31414560000116',
  nome: 'Name',
  cep: '74000000',
  bairro: 'neighbourhood',
  logradouro: 'street',
  municipio: 'city',
  numero: 'number',
  uf: 'state',
  coordinates: {
    lat: 10,
    lng: 20,
  },
};

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('Card component', () => {
  it('should be able to be visible', () => {
    const { getByTestId } = render(<Card company={company} />);

    const cardButton = getByTestId('card-button');

    expect(cardButton).toBeVisible();
  });
});
