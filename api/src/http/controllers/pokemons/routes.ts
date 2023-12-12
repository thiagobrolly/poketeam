import { FastifyInstance } from 'fastify';
import { verifyJwt } from '@/http/middlewares/verify-jwt';
import { add } from './add';
import { list } from './list';
import { remove } from './remove';

export async function pokemonsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt);

  app.post('/pokemons/add', add);
  app.get('/pokemons/list', list);
  app.delete('/pokemons/:pokemonName', remove);
}
