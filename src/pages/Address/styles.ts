import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  position: absolute;
  margin: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 22px 20px;
  background: #fff;
  border-radius: 10px;
  transition: transform 0.2s;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.09);

  &:hover {
    transform: translateY(5px);
  }

  @media (max-width: 767px) {
    margin: 10px;
    width: 55px;
    padding-top: 10px;
    padding-bottom: 5px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.09);
  }
`;

export const CardInformation = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  p {
    font-size: 16px;
    color: ${colors.textCard};
    font-weight: 600;
    margin-bottom: 4px;
    text-transform: capitalize;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 15px;
    color: ${colors.textCard};
    font-weight: 400;

    @media (max-width: 767px) {
      font-size: 13px;
    }
  }
`;

export const InfoRazaoSocial = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
  margin-top: 10px;
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
