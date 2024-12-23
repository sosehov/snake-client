const { IP, PORT, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require("./constants");

let connection;

// This function includes stdin configuration code
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;  // create variable to hold the stdin object 
  stdin.setRawMode(true); // Use Raw Mode to listen for individual keypresses
  stdin.setEncoding("utf8"); // utf8 encoding makes the input text readable
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); // Register a listener for input data

  return stdin;   // return the stdin object to be used elsewhere in the program
};

// This function acts as the data callback handler for stdin
const handleUserInput = function(key) {
  // Exit if user presses ctrl + C
  if (key === "\u0003") {
    process.exit();
  }
// Send data string to the server using connection object
  switch (key) {
  // Bind the keys to be the up, left, down, right movement keys 
  case MOVE_UP_KEY:
    connection.write("Move: up");
    break;
  case MOVE_LEFT_KEY:
    connection.write("Move: left");
    break;
  case MOVE_DOWN_KEY:
    connection.write("Move: down");
    break;
  case MOVE_RIGHT_KEY:
    connection.write("Move: right");
    break;
  case "g":
    connection.write("Keep playing!");
    break;
  case "l":
    connection.write("Great game!");
    break;
  }
};

module.exports = {
  setupInput,
};