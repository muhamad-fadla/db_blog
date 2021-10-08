const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path')
const router = jsonServer.router(path.join(__dirname, '/../db/i.json'));
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');

server.use(cors({ origin: true, credentials: true }))
server.use([
		bodyParser.json({ limit: '10mb', extended: false }),
  		bodyParser.urlencoded({ extended: false }),
	]);
server.use(compression({
	threshold: 0
}))

server.use((req, res, next) => {
      if (req.method === 'GET') {
        next() // Continue
      } else {
        res.sendStatus(403) // Forbidden
      }
    });
server.use(router);

const port = process.env.PORT || 3000;

module.exports = server;
// server.listen(port)