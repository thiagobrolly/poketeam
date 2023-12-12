import styled from 'styled-components';

export const ContainerGoBack = styled.button`
  all: unset;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  cursor: pointer;
  color: ${({ theme }) => theme['yellow-500']};
  border-radius: 8px;
  transition: 0.2s;
  &:hover {
    background: rgb(255 170 0 / 10%);
  }
`;
