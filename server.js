const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();



server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3001;

server.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));