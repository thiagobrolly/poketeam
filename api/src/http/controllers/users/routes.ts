import { FastifyInstance } from 'fastify';
import { register } from '../../controllers/users/register';
import { authenticate } from '@/http/controllers/users/authenticate';
import { profile } from '../../controllers/users/profile';
import { verifyJwt } from '../../middlewares/verify-jwt';
import { refresh } from './refresh';

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register);
  app.post('/sessions', authenticate);

  app.post('/token/refresh', refresh);

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile);
}
