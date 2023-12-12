import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makePokemonUseCase } from '@/use-cases/factories/make-pokemon-use-case';
import { MaximumTeamSizeError } from '@/use-cases/errors/maximun-team-size-error';
import { PokemonAlreadyExistsError } from '@/use-cases/errors/pokemon-already-exists';

export async function add(request: FastifyRequest, reply: FastifyReply) {
  const addPokemonsBodySchema = z.object({
    attack: z.number(),
    defense: z.number(),
    height: z.number(),
    hp: z.number(),
    imageUrl: z.string(),
    name: z.string(),
    speed: z.number(),
    type: z.array(z.string()),
    weight: z.number(),
  });

  const { attack, defense, height, hp, imageUrl, name, speed, type, weight } =
    addPokemonsBodySchema.parse(request.body);

  try {
    const pokemonUseCase = makePokemonUseCase();

    await pokemonUseCase.execute({
      attack,
      defense,
      height,
      hp,
      imageUrl,
      name,
      speed,
      type,
      weight,
      userId: request.user.sub,
    });
  } catch (err) {
    if (err instanceof MaximumTeamSizeError) {
      return reply.status(409).send({ message: err.message });
    }

    if (err instanceof PokemonAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }

  return reply.status(200).send();
}
