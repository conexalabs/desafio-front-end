import styled from 'styled-components';
import { green, white } from '../../contants/color';

export const Container = styled.div`
  height: ${props => props.isMobile ? '35vh' : '30vh'};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TitleView = styled.div`
  height: 50vh;
  width: 100vh;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const IconDiv = styled.div`
  height: 80px;
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: ${props => props.isMobile ? '30px' : '60px'};
  color: ${green};
`;
export const InputView = styled.div`
  height: 50vh;
  width: 65vh;

  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  align-items: center;
  justify-content: ${props => props.isMobile ? 'space-around' : 'space-between'};
`;
export const Input = styled.input`
  height: 60px;
  width: 40vh;
  border-radius: 4px;
  border: 2px solid ${green};  
  padding: 10px;
  font-size: 20px;
`;
export const Button = styled.button`
  background-color: ${green};
  height: 50px;
  width: 20vh;
  border-radius: 30px;
  border-width: 0;
  cursor: pointer;
`
export const ButtonText = styled.span`
  color: ${white};
  font-size: 20;
  font-weight: bold; 
`;
