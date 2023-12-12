import { FastifyReply, FastifyRequest } from 'fastify';
import { makeRemovePokemonUseCase } from '@/use-cases/factories/make-remove-pokemon-use-case';
import { PokemonNotFoundError } from '@/use-cases/errors/pokemon-not-found';

export async function remove(
  request: FastifyRequest<{ Params: { pokemonName: string } }>,
  reply: FastifyReply,
) {
  const { pokemonName } = request.params;

  try {
    const deletePokemonUseCase = makeRemovePokemonUseCase();

    const userId = request.user.sub;

    await deletePokemonUseCase.deleteByName(pokemonName, userId);
  } catch (error) {
    if (error instanceof PokemonNotFoundError) {
      return reply.status(409).send({ message: error.message });
    }
    throw error;
  }

  return reply.status(200).send({ message: 'Pokemon deleted successfully' });
}
