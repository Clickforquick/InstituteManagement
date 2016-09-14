var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var db = require('./config/db.js');

var users = require('./app/models/users.js');

var ObjectID = mongodb.ObjectID;
var USERS_COLLECTION = "users";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
//var db;

// Connect to the database before starting the application server. 
/*var url = 'mongodb://localhost:27017/test'
mongodb.MongoClient.connect(url, function(err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");
*/
var   mongoURL = 'mongodb://localhost:27017/test';
 db.connect(mongoURL, {}, function(err, success) {
     if (err) {
       console.log('\n DB connect :: Fail');
       console.log(dbError);
       return dbError;
     }

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// USERS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

/*  "/users"
 *    GET: finds all users
 *    POST: creates a new user
 */

app.get("/users", function(req, res) {
  return users.find(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/users", function(req, res) {
  var newUser = new users( 
               {firstName : req.body.firstName,
                lastName  : req.body.lastName,
                address   : req.body.address,
                mobile    : req.body.mobile,
                email     : req.body.email,
                password  : req.body.password,
                role      : req.body.role                
               });
  //newUser.createDate = new Date();

  if (!(req.body.firstName || req.body.lastName)) {
    handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
  }

  newUser.save(function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new user.");
    } else {
      return console.log("created");
    }
  });
  return res.send(newUser);
});

/*  "/users/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */

app.get("/users/:id", function(req, res) {
  users.findById({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get user");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/users/:id", function(req, res) {
 return users.findById(req.params.id, function (err, user) {
          user.firstName = req.body.firstName;
          user.lastName  = req.body.lastName;
          user.address        = req.body.address;
          user.mobile         = req.body.mobile;
          user.email          = req.body.email;
          user.password       = req.body.password;
          user.role           = req.body.role;         

 // delete updateDoc._id;
  return user.save(function(err) {
    if (err) {
      handleError(res, err.message, "Failed to update user");
    } else {
      res.status(204).end();
    }
   // return res.send(user);
  });
})
});


app.delete("/users/:id", function(req, res) {
  return users.findById(req.params.id, function (err, user) {
  user.remove(function(err) {
    if (err) {
      handleError(res, err.message, "Failed to delete user");
    } else {
      res.status(204).end();
    }
  });
})
});
