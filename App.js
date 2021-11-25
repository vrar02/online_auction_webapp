const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");
const session = require("express-session");
const mysql2 = require("mysql2/promise");
const MySQLStore = require("express-mysql-session")(session);
const VerifyLogin = require("./services/VerfiyLogin");

module.exports = (config) => {
  const app = express();

  //application uses views directory for serving the html
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

  //application to parse the html links ex: form data etc...
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  //application to search in this directory related to static files like css etc..
  app.use(express.static(path.join(__dirname, "./client")));

  var connection = mysql2.createPool(config.mysql.options);
  var sessionStore = new MySQLStore({}, connection);

  app.use(
    session({
      key: "keyin",
      secret: "my secret key",
      store: sessionStore,
      resave: false,
      saveUninitialized: true,
    })
  );

  const isAuth = (request, response, next) => {
    if (request.session.isAuth) {
      request.io = app.get("io");
      next();
    } else {
      response.redirect("login");
    }
  };

  app.use("/login", async (request, response) => {
    if (!request.session.isAuth) {
      const { email, password } = request.body;

      var verify_login_obj = new VerifyLogin();

      var login_details = await verify_login_obj.verifyLoginDetails(
        email,
        password
      );
      console.log("login:" + login_details);
      if (login_details) {
        request.session.userInfo = email;
        console.log(request.session);
        request.session.isAuth = true;
        response.redirect("/auction");
      } else {
        response.render("login");
      }
    } else {
      response.redirect("/auction");
    }
  });

  app.use("/logout", (request, response) => {
    request.session.destroy((err) => {
      if (!err) {
        response.send("Logout");
      }
    });
  });

  app.get("/", (request, response) => {
    response.render("home");
  });

  app.use("/", isAuth, routes());

  app.use((req, res, next) => {
    const err = new Error(`Not Found (${req.url})`);
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
  return app;
};
