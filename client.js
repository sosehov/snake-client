const net = require("net");
const { IP, PORT, initials } = require("./constants");

// Establish a connection with the game server 
const connect = function() {
  const conn = net.createConnection(PORT, IP);

  // Print a message to the screen when connection is successfully established and pass client name to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(initials);
  });

  // Listen for incoming data after sending the Move: up command
   conn.on("data", (data) => {
      console.log("Received", data);
    });

  // interpret incoming data as text
  conn.setEncoding("utf8");

return conn;
};

module.exports = {
  connect,
};
