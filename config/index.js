const pkg = require("../package.json");

module.exports = {
  applicationName: pkg.name,
  mysql: {
    options: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "auctionsystem",
    },
  },
};
