import { useAuth } from '../../hooks/useAuth';
import * as S from './styles';

export function Header() {
  const { signOut, user } = useAuth();

  return (
    <S.HeaderContainer>
      <p>Olá, {user.name}</p>
      <h1>PokéTeam</h1>
      <button onClick={signOut}>Sair</button>
    </S.HeaderContainer>
  );
}
