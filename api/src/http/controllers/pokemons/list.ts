import { FastifyReply, FastifyRequest } from 'fastify';
import { makeFetchUserPokemonsUseCase } from '@/use-cases/factories/make-fetch-user-pokemons-use-case';

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const fetchUserPokemonsUseCase = makeFetchUserPokemonsUseCase();

  const { pokemons } = await fetchUserPokemonsUseCase.execute({
    userId: request.user.sub,
  });

  return reply.status(200).send(pokemons);
}
