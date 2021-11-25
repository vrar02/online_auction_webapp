const http = require("http");
const mysql = require("mysql");

const config = require("../config");
const App = require("../app");

// var connection = null;
// async function connectToMySQL() {
//   connection = await mysql.createConnection(config.mysql.options);
//   return connection;
// }

// console.log("connecting to db");
// connect = connectToMySQL();
// if (connect != null) {
//   config.mysql.client = connect;
//   console.log("Connected to database");
//   connect.end();
// } else {
//   console.log("Failed to Connect to database");
//   process.exit(1);
// }

/* Logic to start the application */
const app = App(config);
const port = process.env.PORT || "3000";
app.set("port", port);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? `Pipe ${port}` : `Port  ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const server = http.createServer(app);

const io = require("socket.io")(server);
app.set("io", io);
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;

  console.info(`${config.applicationName} listening on ${bind}`);
}
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);

module.exports = { server };
