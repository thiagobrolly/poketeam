import { useParams } from 'react-router-dom';
import { GoBack } from '../../components/GoBack';
import { Loading } from '../../components/Loading';
import { Level } from '../../components/Level';

import * as S from './styles';
import {
  useAddPokemonToTeam,
  usePokemonDetails,
  useRemovePokemonFromTeam,
  useTeamPokemons,
} from '../../services/pokemonTeams';
import { PokemonDTO } from '../../dtos/PokemonDTO';

export function PokemonDetails() {
  const { name } = useParams();

  const { data: pokemon, isLoading } = usePokemonDetails(name ?? '');
  const { mutate: addPokemon } = useAddPokemonToTeam();
  const { mutate: removePokemon } = useRemovePokemonFromTeam();
  const { data: teamPokemons } = useTeamPokemons();

  console.log({ teamPokemons });

  const isPokemonInTeam = (pokemonName: string): boolean => {
    return !!teamPokemons?.some(
      (teamPokemon: PokemonDTO) => teamPokemon.name === pokemonName,
    );
  };

  const handleAddOrRemove = () => {
    if (pokemon) {
      if (isPokemonInTeam(pokemon.name)) {
        removePokemon(pokemon.name);
      } else {
        const { name, sprites, types, stats, height, weight } = pokemon;

        const type = types.map((type) => type.type.name);

        const pokeData = {
          name,
          imageUrl: sprites.other?.['official-artwork'].front_default,
          type,
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          speed: stats[5].base_stat,
          height,
          weight,
        } as PokemonDTO;

        addPokemon(pokeData);
      }
    }
  };

  const renderSelectPokemon = () => {
    return (
      <>
        <S.ContentLeft>
          <img
            src={pokemon?.sprites.other?.['official-artwork'].front_default}
            alt={pokemon?.name}
          />
          <h1>{pokemon?.name}</h1>
        </S.ContentLeft>
        <S.InfoContainer>
          <S.LevelContainer>
            <span>EXP</span> <Level level={pokemon?.base_experience ?? 0} />{' '}
            <span>{pokemon?.base_experience}</span>
          </S.LevelContainer>
          {pokemon?.stats.map((stat) => (
            <S.LevelContainer key={stat.stat.name}>
              <span>{stat.stat.name}</span> <Level level={stat.base_stat} />{' '}
              <span>{stat.base_stat}</span>
            </S.LevelContainer>
          ))}

          <S.LevelContainer>
            <span>Types: </span>
            {pokemon?.types.map((type) => (
              <span color="red" key={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </S.LevelContainer>
          <S.LevelContainer>
            <span>Largura</span> - <span>{pokemon?.weight}</span>
          </S.LevelContainer>
          <S.LevelContainer>
            <span>Altura</span> - <span>{pokemon?.height}</span>
          </S.LevelContainer>
          <button onClick={handleAddOrRemove}>
            {isPokemonInTeam(pokemon?.name ?? '')
              ? 'Remover da Equipe'
              : 'Adicionar à Equipe'}
          </button>
        </S.InfoContainer>
      </>
    );
  };

  return (
    <S.Container>
      <GoBack />
      <S.Content>{isLoading ? <Loading /> : renderSelectPokemon()}</S.Content>
    </S.Container>
  );
}
