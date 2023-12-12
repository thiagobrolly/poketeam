import {
  IFilterPokemons,
  IListPokemons,
  IPokemonDetails,
  PokemonFilterProps,
} from '../dtos/PokemonsDTO';
import { getPokemonDetails } from './pokemonTeams';
import { pokeAPI } from './pokeAPI';

export async function listPokemons(
  type?: string,
  searchTerm?: string,
): Promise<IListPokemons> {
  if (searchTerm) {
    const response = await pokeAPI.get<IPokemonDetails>(
      `/pokemon/${searchTerm}`,
    );

    return {
      count: 1,
      next: null,
      previous: null,
      results: [response.data],
    };
  }

  if (type) {
    const response = await pokeAPI.get<IFilterPokemons>(`/type/${type}`);

    const promiseArray = response.data.pokemon.map(
      ({ pokemon }: PokemonFilterProps) => getPokemonDetails(pokemon.name),
    );

    const results = await Promise.all(promiseArray);

    const newListPokemons: IListPokemons = {
      count: response.data.pokemon.length,
      next: null,
      previous: null,
      results,
    };

    return newListPokemons;
  }

  const response = await pokeAPI.get<IListPokemons>('/pokemon');

  const promiseArray = response.data.results.map(({ name }) =>
    getPokemonDetails(name),
  );

  const results = await Promise.all(promiseArray);

  return {
    ...response.data,
    results,
  };
}
