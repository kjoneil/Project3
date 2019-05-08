const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// this is a test
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||"mongodb://tomtomtom:123456tom@ds145146.mlab.com:45146/heroku_ml83mqkl"
)
// mongoose.connect(
//     process.env.MONGODB_URI ||"mongodb:"
//   )
  // mongoose.connect(
  
//     process.env.MONGODB_URI || "mongodb+srv://admin-kevin:abcd123@cluster0-r9eig.mongodb.net/wonderbooksdb"
//   );
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/wonderBooks"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
