const app = require('./app');
const http = require('http');

const server = http.createServer(app);

require('./socket').connection(server);
server.listen(app.get('port'), _ => console.log(`server on port ${app.get('port')}`));