const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const commentModel = require('../models/comments.js');
// API Routes
router.use("/api", apiRoutes);

router.route('/saveComment').post((req,res)=> {
console.log('we hit the route!!!! / savecomment', req.body)

// console.log('this is our model', commentModel)

commentModel.create(req.body).then(function(data){
  console.log('we just saved this dude', data);
  res.json(data)
})
})

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
