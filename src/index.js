const app = require('./app');
const http = require('http');

const server = http.createServer(app);

require('./socket').connection(server);
server.listen(3000, _ => console.log('server on port 3000'));