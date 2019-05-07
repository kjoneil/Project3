const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

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


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user:abcd123@ds259732.mlab.com:59732/heroku_03g87dzb"
  
);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_ml83mqkl:m1gb7ps6bubrc5u93b5q13kk6h@ds145146.mlab.com:45146/heroku_ml83mqkl"
);

// mongoose.connect(
  
//     process.env.MONGODB_URI || "mongodb+srv://admin-kevin:abcd123@cluster0-r9eig.mongodb.net/wonderbooksdb"
//   );
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost:27017/wonderBooks",{useNewUrlParser: true}
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
