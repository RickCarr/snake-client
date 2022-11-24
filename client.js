const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    conn.write('Name: rrc');
  
    console.log('Established Connection');
  });
  conn.on('data', (incomingData) => {
    console.log('Incoming Data :', incomingData);
  });
  return conn;
};
const connection = connect();

module.exports = { connection };