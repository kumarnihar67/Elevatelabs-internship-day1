const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js running in Docker!');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
