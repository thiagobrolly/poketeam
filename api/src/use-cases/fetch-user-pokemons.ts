import { PokemonsRepository } from '@/repositories/pokemons-repository';
import { Pokemon } from '@prisma/client';

interface FetchUserCheckInsHistoryUseCaseRequest {
  userId: string;
}

interface FetchUserCheckInsHistoryUseCaseResponse {
  pokemons: Pokemon[];
}

export class FetchUserPokemonsUseCase {
  constructor(private pokemonsRepository: PokemonsRepository) {}

  async execute({
    userId,
  }: FetchUserCheckInsHistoryUseCaseRequest): Promise<FetchUserCheckInsHistoryUseCaseResponse> {
    const pokemons = await this.pokemonsRepository.findManyByUserId(userId);

    return {
      pokemons,
    };
  }
}
