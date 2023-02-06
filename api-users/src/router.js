const express = require("express");
const usersController = require("./controllers/usersController");
const usersMiddleware = require("./middlewares/usersMiddleware");

const router = express.Router();

router.get("/users", usersController.getAll);
router.post(
  "/users",
  usersMiddleware.validateUsername,
  usersMiddleware.validateEmail,
  usersController.addUser
);
router.delete("/users/:id", usersController.deleteUser);
router.put(
  "/users/:id",
  usersMiddleware.validateUsername,
  usersMiddleware.validateEmail,
  usersController.updateUser
);

module.exports = router;
