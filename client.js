const net = require("net");
  
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.182',
    port: 50541,
  });

 // conn.on("data", () => {
    //console.log("Server says: ", data);
  //});

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: SOS");
  })

// interpret incoming data as text
conn.setEncoding("utf8");

return conn;
};

module.exports = connect;