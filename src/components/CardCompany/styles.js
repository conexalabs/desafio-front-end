import styled from 'styled-components';
import { white, green } from '../../contants/color';

export const Container = styled.div`
  height: 30vh;
  min-width: 300px;
  max-width: 300px;
  background-color: ${white};
  padding: 20px;
  border-radius: 10px;
  margin-left: 5%;
  cursor: pointer;
`;
export const InformationView = styled.div`
  width: 100%;
  height: 33%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Title = styled.p`
  font-size: 20;
  font-weight: bold;
  color: ${green};  
`;
export const Description = styled.p`
  font-size: 20;
  color: ${green};    
`;
