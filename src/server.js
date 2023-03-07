// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'Logrado 2' };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 5000, host: '::' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
