const express = require("express");
const {
  getBooksController,
  addBookController,
} = require("../controller/books");
const router = express.Router();

router.get("/get", getBooksController);

router.post("/post", addBookController);

module.exports = router;
