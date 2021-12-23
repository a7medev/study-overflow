import fastify from 'fastify';

const server = fastify();

server.get('/ping', async () => {
  return 'pong';
});

const PORT = process.env.PORT || 3000;
server
  .listen(PORT)
  .then(address => {
    console.log(`Server listening at ${address}`);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
