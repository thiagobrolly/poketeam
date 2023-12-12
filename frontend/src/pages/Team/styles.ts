import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  h1 {
    text-align: center;
  }
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

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  width: 100%;
  height: 500px;
  padding: 8px;
  gap: 8px;
`;
