import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { AppError } from '../../utils/AppError';
import * as S from './styles';
import { Loading } from '../../components/Loading';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<null | string>();

  const { signIn } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setIsError(null);

    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Não foi possível entrar. Tente novamente mais tarde.';
      setIsError(title);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <S.Container>
      <h1>Faça login na PokéTeam</h1>

      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputContainer>

        <S.InputContainer>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
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
          {isLoading ? <Loading /> : 'Entrar'}
        </button>

        {isError && <span style={{ color: 'red' }}>{isError}</span>}
      </S.Form>

      <Link to="/register">Criar conta</Link>
    </S.Container>
  );
}
