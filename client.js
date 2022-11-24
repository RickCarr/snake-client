const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: rrc');
    console.log('Welcome to Move or Die!');
    console.log('Movements: [h] = left, [j] = down, [k] = up, [l] = right');
    console.log('Snake Talk: [1] = Hello, [2] = World, [3] = I am a, [4] = talking, [5] = snake!');
    console.log('Exit Command: [Ctrl]+[c]');
  });
  conn.on('data', (incomingData) => {
    console.log('Incoming Data :', incomingData);
  });
  return conn;
};

const connection = connect();
module.exports = { connection };