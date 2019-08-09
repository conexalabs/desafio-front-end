import styled from 'styled-components';
import { white } from '../../contants/color';


export const Container = styled.div`
  height: 70vh;
  width: 100%;
  background-image: linear-gradient(to right, #388669, #459A9E);

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconView = styled.div`
  height: 100%;
  width: 10%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const List = styled.div`
  width: 80%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
`;
export const SearchCompanyView  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
export const LabelCompany = styled.p`
  font-size: 20px;
  color: ${white};
  font-weight: bold;
`;
export const ImageCompany = styled.img`
  width: 25vh;
  height: 25vh;
  margin-bottom: 15px;
`;