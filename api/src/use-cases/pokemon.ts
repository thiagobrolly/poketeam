import { PokemonsRepository } from '@/repositories/pokemons-repository';
import { Pokemon } from '@prisma/client';
import { MaximumTeamSizeError } from './errors/maximun-team-size-error';
import { PokemonAlreadyExistsError } from './errors/pokemon-already-exists';

interface CreatePokemonUseCaseRequest {
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  height: number;
  weight: number;
  imageUrl: string;
  userId: string;
}

interface CreatePokemonUseCaseResponse {
  pokemon: Pokemon;
}

export class CreatePokemonUseCase {
  constructor(private pokemonsRepository: PokemonsRepository) {}

  async execute({
    name,
    type,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    imageUrl,
    userId,
  }: CreatePokemonUseCaseRequest): Promise<CreatePokemonUseCaseResponse> {
    const pokemonCount = await this.pokemonsRepository.countByUserId(userId);

    if (pokemonCount >= 5) {
      throw new MaximumTeamSizeError();
    }

    const existingPokemon = await this.pokemonsRepository.findByNameAndUserId(
      name,
      userId,
    );

    if (existingPokemon) {
      throw new PokemonAlreadyExistsError();
    }

    const pokemon = await this.pokemonsRepository.create({
      name,
      type,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      imageUrl,
      user_id: userId,
    });

    return {
      pokemon,
    };
  }
}
