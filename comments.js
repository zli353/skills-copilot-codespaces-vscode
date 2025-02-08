// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const readStream = fs.createReadStream(path.join(__dirname, 'comments.html'), 'utf8');
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});