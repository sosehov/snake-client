const net = require("net");

const config = {
  host: '10.0.0.182',
  port: 50541,
};

 // Create a new connection 
const connect = function() {
  const conn = net.createConnection(config);
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SOS");

    // Send move command right after connecting
    // conn.write("Move: up");
  });
  // Listening for incoming data. Allows us to understand what information we're receiving from the server after sending the Move: up command
   conn.on("data", (data) => {
      console.log("Received", data);
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

return conn;
};

module.exports = connect;