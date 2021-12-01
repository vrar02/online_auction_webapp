const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");
const session = require("express-session");
const mysql2 = require("mysql2/promise");
const MySQLStore = require("express-mysql-session")(session);
const VerifyLogin = require("./services/VerfiyLogin");
const OnlineAuction = require("./services/OnlineAuction");
const multer = require("multer")
const { request, response } = require("express");

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

  // Set variables for downloading uploaded images
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
  
        // Uploads is the Upload_folder_name
        cb(null, "./client/images")
    },
    filename: function (req, file, cb) {
      cb(null, req.body.title+".jpg")
    }
  })
  
  const maxSize = 1 * 1000 * 1000;
    
  var upload = multer({ 
      storage: storage,
      limits: { fileSize: maxSize },
      fileFilter: function (req, file, cb){
      
          // Set the filetypes, it is optional
          var filetypes = /jpeg|jpg|png/;
          var mimetype = filetypes.test(file.mimetype);
    
          var extname = filetypes.test(path.extname(
                      file.originalname).toLowerCase());
          
          if (mimetype && extname) {
              return cb(null, true);
          }
        
          cb("Error: File upload only supports the "
                  + "following filetypes - " + filetypes);
        } 
    
  // filedata is the name of file attribute
  }).single("filedata");    

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

  // For uploading the painting
  app.use("/fileupload", async (request,response)=>{
    var seller_email = request.session.userInfo;
    
    upload(request,response,async function(err) {
      
      if(err) {

        // ERROR occured (here it can be occured due
        // to uploading image of size greater than
        // 1MB or uploading different file type)
  
        response.send(err)
    }
    else {

      var auction_obj = new OnlineAuction()
      var seller_ids =  await auction_obj.fetchBuyerId(seller_email);
      console.log("Seller email",seller_email)
      var seller_ids = seller_ids[0].member_id;

      auction_obj.insertIntoPainting(request.body,seller_ids)
      


    }

    response.redirect("/paintings");
    
    });
  })


  app.use("/login", async (request, response) => {
    if (!request.session.isAuth) {
      const { email, password } = request.body;

      var verify_login_obj = new VerifyLogin();

      var login_details = await verify_login_obj.verifyLoginDetails(
        email,
        password
      );
      console.log("login:" + login_details);
      var login = false;
      if (login_details.length != 0) {
        login = true;
      }

      if (login) {
        request.session.userInfo = email;
        console.log(request.session);
        request.session.isAuth = true;

        var isbuyer = await verify_login_obj.verifyBuyer(
          login_details[0].member_id
        );
        if (isbuyer) {
          request.session.isBuyer = true;
          response.redirect("/auction");
        } else {
          request.session.isSeller = true;
          response.redirect("/paintings");
        }
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
        response.render("home");
      }
    });
  });

  app.get("/about", (request, response) => {
    response.render("about");
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
