const net = require("net");
  
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.182',
    port: 50541,
  });

  conn.on("data", () => {
    console.log("Server says: ", data);
  });
// interpret incoming data as text
conn.setEncoding("utf8");

return conn;
};
console.log("Connecting...")
connect();

module.exports = connect;