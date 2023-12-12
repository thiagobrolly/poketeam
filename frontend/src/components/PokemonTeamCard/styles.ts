import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme['gray-800']};
  color: ${({ theme }) => theme['gray-100']};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  img {
    width: 120px;
  }

  p {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  button {
    cursor: pointer;
  }
`;

export const ContainerTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const LevelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
