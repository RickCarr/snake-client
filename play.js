const { connect } = require('./client');

console.log("Connecting ...");
connect();

const handleUserInput = function(key) {
  console.log('handleUerInput is called');
  // stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Emergency Exit!\n');
    process.exit();
  }
};
// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  console.log('setting up input');
  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput()

