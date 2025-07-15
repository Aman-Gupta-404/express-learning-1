const Books = require("../model/books");

const getBooksController = (req, res) => {
  console.log("hello from get req");

  res.send("Hello from get resquest");
};

const addBookController = async (req, res) => {
  try {
    // get the book data from user request
    const bookData = req.body;
    // add a book to the document
    console.log(bookData);
    const result = await Books.create({ ...bookData });
    if (result) {
      // return a success if insert successful
      res.status(200).send("Added data successfully");
    } else {
      res.staus(500).send("Error occured!");
    }
  } catch (error) {
    console.log(error);
    res.staus(400).send("Error occured!");
  }
};

module.exports = {
  getBooksController,
  addBookController,
};
