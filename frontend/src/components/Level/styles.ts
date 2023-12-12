import styled, { css } from 'styled-components';

export type ContainerProps = {
  level: number;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, level }) => css`
    color: ${theme['yellow-500']};
    width: 200px;
    height: 5px;
    border-radius: 8px;
    background-color: ${theme['gray-700']};
    overflow: hidden;

    div {
      width: ${level}%;
      height: 100%;
      background: ${level > 50 ? theme['green-500'] : theme['red-500']};
    }
  `}
`;
