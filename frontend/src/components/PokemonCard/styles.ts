import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-100']};
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }

  img {
    width: 120px;
  }

  p {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
`;

export const ContainerTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
