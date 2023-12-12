import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 1rem;

  div {
    display: flex;
    gap: 8px;

    a {
      all: unset;
      color: ${({ theme }) => theme['yellow-500']};
      cursor: pointer;
      margin-left: 8px;
    }
  }
`;

export const TextName = styled.p`
  ${({ theme }) => css`
    font-size: 1.125rem;
    color: ${theme['gray-100']};
    font-weight: bold;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme['gray-300']};
  `}
`;
