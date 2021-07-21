import styled from 'styled-components';
import colors from '../../styles/colors';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const TextLoading = styled.div`
  font-size: 20px;
  color: ${colors.textPrimary};
  margin-left: 10px;
`;

export const LoadingIcon = styled.div`
  border: 8px solid ${colors.background};
  border-left-color: ${colors.primary};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
