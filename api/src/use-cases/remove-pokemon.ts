import { PokemonsRepository } from '@/repositories/pokemons-repository';
import { PokemonNotFoundError } from './errors/pokemon-not-found';

export class RemovePokemonsUseCase {
  constructor(private pokemonsRepository: PokemonsRepository) {}

  async deleteByName(pokemonName: string, userId: string): Promise<void> {
    const existingPokemon = await this.pokemonsRepository.findByNameAndUserId(
      pokemonName,
      userId,
    );

    if (!existingPokemon) {
      throw new PokemonNotFoundError();
    }

    await this.pokemonsRepository.deleteByName(pokemonName, userId);
  }
}
