const net = require('node:net');

let PORT = 3000;

const server = net.createServer((socket) => {
  socket.write('Echo server\r\n');

  socket.pipe(socket);
  socket.pipe(process.stdout);

  // echo "Hello World" | nc localhost 3000
});

server.on('listening', () => {
  console.log('Server started on port ', PORT);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is already in use`);
    PORT++;
    start();
  } else {
    console.error(err);
  }
});

function start() {
  server.listen(PORT);
}

start();
