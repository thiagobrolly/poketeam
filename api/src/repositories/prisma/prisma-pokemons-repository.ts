import { prisma } from '@/lib/prisma';
import { PokemonsRepository } from '@/repositories/pokemons-repository';
import { Prisma } from '@prisma/client';

export class PrismaPokemonsRepository implements PokemonsRepository {
  async create(data: Prisma.PokemonUncheckedCreateInput) {
    const pokemon = await prisma.pokemon.create({
      data,
    });

    return pokemon;
  }

  async countByUserId(userId: string) {
    const count = await prisma.pokemon.count({
      where: {
        user_id: userId,
      },
    });

    return count;
  }

  async findManyByUserId(userId: string) {
    const pokemons = await prisma.pokemon.findMany({
      where: {
        user_id: userId,
      },
    });

    return pokemons;
  }

  async findByNameAndUserId(name: string, userId: string) {
    const pokemon = await prisma.pokemon.findFirst({
      where: {
        name,
        user_id: userId,
      },
    });

    return pokemon;
  }

  async deleteById(pokemonId: string): Promise<void> {
    await prisma.pokemon.delete({
      where: {
        id: pokemonId,
      },
    });
  }

  async deleteByName(pokemonName: string, userId: string): Promise<void> {
    await prisma.pokemon.deleteMany({
      where: {
        name: pokemonName,
        user_id: userId,
      },
    });
  }
}
