import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
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
  }

  button {
    width: 100%;
    background-color: ${({ theme }) => theme['yellow-500']};
    color: ${({ theme }) => theme['gray-900']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.2s;

    &:hover {
      background: rgb(255 170 0 / 50%);
    }
  }
`;

export const Form = styled.form`
  width: 520px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  margin-block: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: self-start;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
  }
`;
