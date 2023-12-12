import * as S from './styles';
import { IPokemonDetails } from '../../dtos/PokemonsDTO';

type Props = {
  pokemon: IPokemonDetails;
};

export const PokemonCard = ({ pokemon, ...rest }: Props) => (
  <S.Container to={`/pokemon/${pokemon.name}`} {...rest}>
    <img
      src={pokemon?.sprites.other?.['official-artwork'].front_default}
      alt={pokemon?.name}
    />
    <p>{pokemon.name}</p>
    <S.ContainerTypes>
      {pokemon?.types.map((type) => (
        <span color="red" key={type.type.name}>
          {type.type.name}
        </span>
      ))}
    </S.ContainerTypes>
  </S.Container>
);
