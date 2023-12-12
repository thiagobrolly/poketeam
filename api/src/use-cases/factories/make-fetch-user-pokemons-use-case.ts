import { PrismaPokemonsRepository } from '@/repositories/prisma/prisma-pokemons-repository';
import { FetchUserPokemonsUseCase } from '../fetch-user-pokemons';

export function makeFetchUserPokemonsUseCase() {
  const pokemonsRepository = new PrismaPokemonsRepository();
  const useCase = new FetchUserPokemonsUseCase(pokemonsRepository);

  return useCase;
}
