import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const CardPaper = styled(Paper)`
  && {
    /* grid-template-columns: repeat(3, 1fr); */
    /* grid-gap: 1rem; */
    width: 240px;
    padding: 25px;
    margin: 0.2rem;
    cursor: pointer;

    transform: scale(0.99);

    &:hover {
      transform: scale(1);
    }
    @media screen and (max-width: 890px) {
      width: 100%;
      margin: 1.5rem 0;
    }
  }
`;

export const CardBoldText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #3a8970;

  margin-top: 0;
  margin-bottom: 0;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #3a8970;

  margin-top: 5px;
  margin-bottom: 0;
`;
