const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/books"
router.route("/")
  // .get(modulesController.findAll)
  .post(commentsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(commentsController.findById)
  // .put(modulesController.update)
  // .delete(modulesController.remove);

module.exports = router;