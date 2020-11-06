import React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import Home from '../../pages/Home';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Home page', () => {
  it('should be able to verify cnpj', async () => {
    const { getByPlaceholderText, getByText } = render(<Home />);

    const inputCnpj = getByPlaceholderText('CNPJ...');
    const searchButton = getByText('LOCALIZAR');

    fireEvent.change(inputCnpj, { target: { value: '3141456000011' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(getByText('Um CNPJ precisa conter 14 dígitos')).toBeVisible();
    });
  });

  it('should be able to search for companies', async () => {
    const { getByPlaceholderText, getByText } = render(<Home />);

    const inputCnpj = getByPlaceholderText('CNPJ...');
    const searchButton = getByText('LOCALIZAR');

    fireEvent.change(inputCnpj, { target: { value: '31414560000116' } });
    fireEvent.click(searchButton);

    await waitForElementToBeRemoved(
      getByText('Localize acima a primeira empresa'),
      { timeout: 6000 },
    );
  });
});
