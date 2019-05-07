const router = require("express").Router();
const bookRoutes = require("./books");
const moduleRoutes = require("./modules")

// Book routes
router.use("/books", bookRoutes);
router.use("/modules", moduleRoutes);

module.exports = router;
