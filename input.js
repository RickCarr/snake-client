let connection;

const handleUserInput = function(key) {
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
  if (key === '\u0003') {
    process.stdout.write('Emergency Exit!\n');
    process.exit();
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