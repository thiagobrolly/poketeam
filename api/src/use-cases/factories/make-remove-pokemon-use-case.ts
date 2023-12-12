import { PrismaPokemonsRepository } from '@/repositories/prisma/prisma-pokemons-repository';
import { RemovePokemonsUseCase } from '../remove-pokemon';

export function makeRemovePokemonUseCase() {
  const pokemonRepository = new PrismaPokemonsRepository();
  const removePokemonUseCase = new RemovePokemonsUseCase(pokemonRepository);

  return removePokemonUseCase;
}
