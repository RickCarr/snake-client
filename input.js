let connection;

const handleUserInput = function(key) {
  //movement
  if (key === 'h') {
    connection.write('Move: left');
  }
  if (key === 'j') {
    connection.write('Move: down');
  }
  if (key === 'k') {
    connection.write('Move: up');
  }
  if (key === 'l') {
    connection.write('Move: right');
  }
  //exit command
  if (key === '\u0003') {
    process.stdout.write('Emergency Exit!\n');
    process.exit();
  }
  //communication
  if (key === '1') {
    connection.write('Say: Hello');
  }
  if (key === '2') {
    connection.write('Say: World');
  }
  if (key === '3') {
    connection.write('Say: I am a');
  }
  if (key === '4') {
    connection.write('Say: talking');
  }
  if (key === '5') {
    connection.write('Say: snake!');
  }
};
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };