const net = require('net');
const port = 12350;

// 2.tcp.ngrok.io:12350

const connectionConfig = {
  port: port,
  host: '2.tcp.ngrok.io'
};

const client = net.createConnection(connectionConfig);

client.setEncoding('utf8');

client.on('connect',  () => {
  console.log('client is connected to the server');
});

process.stdin.on('data', (message) => {
  client.write(message);
});

client.on('data', function(message) {
  console.log('server sent:', message);
});
