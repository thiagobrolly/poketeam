import { Pokemon, Prisma } from '@prisma/client';

export interface PokemonsRepository {
  create(data: Prisma.PokemonUncheckedCreateInput): Promise<Pokemon>;
  countByUserId(userId: string): Promise<number>;
  findByNameAndUserId(name: string, userId: string): Promise<Pokemon | null>;
  findManyByUserId(userId: string): Promise<Pokemon[]>;
  deleteById(pokemonName: string): Promise<void>;
  deleteByName(pokemonName: string, userId: string): Promise<void>;
}
