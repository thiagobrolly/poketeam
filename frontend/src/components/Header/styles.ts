import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 5rem;
    color: ${({ theme }) => theme['yellow-500']};
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;
