const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path')
const router = jsonServer.router(path.join(__dirname, '/../db/i.json'));
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;

module.exports = server;