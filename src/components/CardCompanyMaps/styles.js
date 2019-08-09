import styled from 'styled-components';
import { white, green } from '../../contants/color';

export const Container = styled.div`
  height: 40vh;
  width: 30vh;
  background-color: ${white};
  border-bottom-right-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 20px;
`;
export const IconView = styled.div`
  height: 25%;
  width: 50px;  
  cursor: pointer;
`;
export const InformationView = styled.div`
  width: 100%;
  height: 25%;

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
