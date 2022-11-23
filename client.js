const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    conn.write('Name: rrc');
    
    // setInterval(() => {
    //   conn.write('Move: up'); 
    // }, 50);
    
    console.log('Established Connection');
  })
  conn.on('data', (incomingData) => {
    console.log('Incoming Data :', incomingData);
  })
  return conn;
};


module.exports = { connect }