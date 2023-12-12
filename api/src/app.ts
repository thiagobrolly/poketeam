import fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import fastifyCookie from '@fastify/cookie';
import cors from '@fastify/cors';
import { ZodError } from 'zod';
import { env } from './env';
import { usersRoutes } from './http/controllers/users/routes';
import { pokemonsRoutes } from './http/controllers/pokemons/routes';

export const app = fastify();

app.register(fastifyCookie);

app.register(cors, {
  origin: true,
  credentials: true,
  exposedHeaders: ['set-cookie'],
});

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '45m',
  },
});

app.register(usersRoutes);
app.register(pokemonsRoutes);

app.setErrorHandler((error, _, reply) => {
  if (
    error.code === 'FST_JWT_NO_AUTHORIZATION_IN_COOKIE' ||
    error.code === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED'
  ) {
    return reply
      .status(401)
      .send({ message: 'Invalid JWT token.', code: error.code });
  }

  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() });
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error);
  } else {
    //! TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' });
});
