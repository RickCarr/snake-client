const { connection } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");

setupInput(connection);