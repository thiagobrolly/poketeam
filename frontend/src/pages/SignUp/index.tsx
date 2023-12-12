import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { AppError } from '../../utils/AppError';
import * as S from './styles';
import { Loading } from '../../components/Loading';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<null | string>();

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setIsError(null);

    try {
      await api.post('/users', { name, email, password });

      navigate('/');
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível criar a conta. Tente novamente mais tarde.';
      setIsError(title);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <S.Container>
      <h1>Cadastre-se</h1>

      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <label htmlFor="Name">Name</label>
          <input
            id="name"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.InputContainer>

        <S.InputContainer>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputContainer>

        <S.InputContainer>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputContainer>

        <button
          type="submit"
          disabled={
            password.length < 6 || email === '' || email === '' || isLoading
          }
        >
          {isLoading ? <Loading /> : 'Criar Conta'}
        </button>

        {isError && <span style={{ color: 'red' }}>{isError}</span>}
      </S.Form>

      <Link to="/">Fazer login</Link>
    </S.Container>
  );
}
