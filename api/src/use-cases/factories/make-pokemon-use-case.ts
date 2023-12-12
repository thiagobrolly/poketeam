import { PrismaPokemonsRepository } from '@/repositories/prisma/prisma-pokemons-repository';
import { CreatePokemonUseCase } from '../pokemon';

export function makePokemonUseCase() {
  const pokemonRepository = new PrismaPokemonsRepository();
  const pokemonUseCase = new CreatePokemonUseCase(pokemonRepository);

  return pokemonUseCase;
}
