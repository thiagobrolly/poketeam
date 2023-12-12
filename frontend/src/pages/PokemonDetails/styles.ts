import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  img {
    width: 380px;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  align-self: center;
  height: calc(100vh - 200px);
`;

export const LevelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 8px;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
