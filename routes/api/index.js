const router = require("express").Router();
const bookRoutes = require("./books");
const commentRoutes = require("./comments");

// Book routes
router.use("/books", bookRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
