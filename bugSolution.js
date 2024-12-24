const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error
    throw new Error('Something went wrong!');
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
    return; // Important: Stop further processing
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});