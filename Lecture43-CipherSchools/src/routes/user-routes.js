const express = require("express");
const router = express.Router();
const UserController =  require("../controllers/user-controller");

router.post("/login", UserController.loginUser);
router.post("/signup", UserController.addNewUser);

module.exports = router;