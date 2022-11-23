const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log('established connection');
  })
  conn.on('data', (incomingData) => {
    console.log('incoming data :', incomingData);
  })
  return conn;
};


module.exports = { connect }