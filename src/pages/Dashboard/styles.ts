import styled, { css } from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

interface formProps {
  hasError?: boolean;
}

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  background: ${colors.background};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    font-family: 'Roboto';
    margin-left: 22px;
    font-weight: 400;
    color: ${colors.primary};

    @media (max-width: 767px) {
      font-size: 25px;
      margin-left: 12px;
    }
  }
`;

export const Form = styled.form<formProps>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  input {
    flex: 1;
    width: 375px;
    font-weight: 500;
    color: #292929;
    font-size: 20px;
    height: 65px;
    padding: 0 24px;
    border-radius: 5px;
    border: 2px solid ${colors.primary};

    @media (max-width: 767px) {
      font-size: 14px;
      height: 45px;
      width: 200px;
    }

    ${(props) =>
      props.hasError &&
      css`
        border-color: ${colors.error};
      `}
  }

  button {
    margin-left: 20px;
    height: 50px;
    font-size: 20px;
    padding: 8px 32px;
    background-color: ${colors.primary};
    border-radius: 30px;
    color: #fff;
    font-weight: 500;
    border: 0;
    transition: background, 0.6s;

    @media (max-width: 767px) {
      font-size: 14px;
      height: 45px;
      padding: 5px 20px;
    }

    &:hover {
      background: ${shade(0.2, '#3a8970')};
    }
  }
`;

export const Error = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.error};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  padding: 8px 12px;
  border-radius: 4px;
`;

export const Body = styled.div`
  padding: 100px 130px 189px 130px;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 12px;
  }

  a {
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 20px;
  background: #fff;
  border-radius: 10px;
  transition: transform 0.2s;
  margin: 10px;
  height: 315px;
  justify-content: space-between;

  p {
    font-size: 16px;
    color: ${colors.textCard};
    font-weight: 600;
    margin-bottom: 4px;
    text-transform: capitalize;
  }

  span {
    font-size: 15px;
    color: ${colors.textCard};
    font-weight: 400;
  }
`;

export const InfoRazaoSocial = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
`;

export const InfoCNPJ = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
`;

export const InfoEndereco = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #3c8d7c;
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin-top: 10px;
    font-weight: 300;
    font-size: 22px;
    color: ${colors.textPrimary};

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
`;
