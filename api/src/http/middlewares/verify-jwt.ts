import { FastifyReply, FastifyRequest } from 'fastify';

export async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
  try {
    if (!request.headers.authorization) {
      return reply.status(401).send({ message: 'invalid token' });
    }

    await request.jwtVerify();
  } catch (error) {
    return reply.status(401).send({ message: 'expired token' });
  }
}
