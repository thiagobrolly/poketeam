import { PokemonDTO } from '../../dtos/PokemonDTO';
import { GoBack } from '../../components/GoBack';
import { PokemonTeamCard } from '../../components/PokemonTeamCard';
import { Loading } from '../../components/Loading';
import { AppError } from '../../utils/AppError';
import {
  useRemovePokemonFromTeam,
  useTeamPokemons,
} from '../../services/pokemonTeams';
import * as S from './styles';

export function Team() {
  const {
    data: teamPokemons,
    isLoading,
    refetch,
    isError,
    error,
  } = useTeamPokemons();
  const { mutate: removePokemon } = useRemovePokemonFromTeam();

  const handleRemovePokemon = (pokemonName: string) => {
    removePokemon(pokemonName);
    refetch();
  };

  const renderPokemonList = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (isError) {
      return (
        <div>
          {error instanceof AppError
            ? error.message
            : 'Não foi possível carregar os pokemóns.'}
        </div>
      );
    }

    return teamPokemons?.map((pokemon: PokemonDTO) => (
      <PokemonTeamCard
        key={pokemon.id}
        pokemon={pokemon}
        onRemoveFromTeam={() => handleRemovePokemon(pokemon.name)}
      />
    ));
  };

  return (
    <S.Container>
      <h1>Team</h1>
      <GoBack />
      <S.Content>{renderPokemonList()}</S.Content>
    </S.Container>
  );
}
