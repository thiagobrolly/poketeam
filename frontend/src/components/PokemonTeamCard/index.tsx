import { PokemonDTO } from '../../dtos/PokemonDTO';
import { Level } from '../Level';
import * as S from './styles';

type Props = {
  pokemon: PokemonDTO;
  onRemoveFromTeam: () => void;
};

export const PokemonTeamCard = ({
  pokemon,
  onRemoveFromTeam,
  ...rest
}: Props) => {
  return (
    <S.Container {...rest}>
      <img src={pokemon?.imageUrl} alt={pokemon?.name} />
      <p>{pokemon.name}</p>
      <S.ContainerTypes>
        {pokemon?.type.map((type) => (
          <span color="red" key={type}>
            {type}
          </span>
        ))}
      </S.ContainerTypes>
      <div>
        <S.LevelContainer>
          <span>HP</span> <Level level={pokemon.hp} />
          <span>{pokemon.hp}</span>
        </S.LevelContainer>
        <S.LevelContainer>
          <span>Attack</span> <Level level={pokemon.attack} />
          <span>{pokemon.attack}</span>
        </S.LevelContainer>
        <S.LevelContainer>
          <span>defense</span> <Level level={pokemon.defense} />
          <span>{pokemon.defense}</span>
        </S.LevelContainer>
        <S.LevelContainer>
          <span>speed</span> <Level level={pokemon.speed} />
          <span>{pokemon.speed}</span>
        </S.LevelContainer>
        <S.LevelContainer>
          <span>weight</span> - <span>{pokemon.weight}</span>
        </S.LevelContainer>
        <S.LevelContainer>
          <span>height</span> - <span>{pokemon.height}</span>
        </S.LevelContainer>
      </div>

      <button type="button" onClick={onRemoveFromTeam}>
        Liberar
      </button>
    </S.Container>
  );
};
