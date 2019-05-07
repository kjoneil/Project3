const router = require("express").Router();
const modulesController = require("../../controllers/modulesController");

// Matches with "/api/books"
router.route("/")
  .get(modulesController.findAll)
  .post(modulesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(modulesController.findById)
  // .put(modulesController.update)
  // .delete(modulesController.remove);

module.exports = router;