const express = require("express");
const router = express.Router();
const { signupUser } = require("../controller/users");

router.post("/signup", signupUser);

module.exports = router;
