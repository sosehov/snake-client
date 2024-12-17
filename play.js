const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.182',
    port: 50541,
  });

  conn.on("data", () => {
    conn.write("Hello from client!");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting...")
connect();
