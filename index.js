const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Node.js app deployed via GitHub Actions!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
