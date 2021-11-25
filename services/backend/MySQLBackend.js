const mysql = require("mysql2");

const session = require("express-session");
const config = require("../../config");

//const MySQLStore = require("express-mysql-session")(session);

class MySQLBackend {
  constructor() {
    this.connection = null;
  }
  connect() {
    this.connection = mysql.createConnection(config.mysql.options);
    return this.connection;
  }

  disconnect() {
    return this.connection.end();
  }
}
// var sessionStore = new MySQLStore({
//   expiration: 10800000,
//   createDatabaseTable: true,
//   schema: {
//     tableName: "auctionsession",
//     columnNames: {
//       session_id: "session_id",
//       expires: "expires",
//       data: "data",
//     },
//   },
// });

//export default MySQLBackend;
module.exports = MySQLBackend;
