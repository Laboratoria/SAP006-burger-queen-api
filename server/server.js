const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3500;
const server = http.createServer();
server.listen(port); // procura a porta 3000 para rodar o projeto