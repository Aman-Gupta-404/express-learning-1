const express = require("express");
const booksRouter = require("./routes/books");

const app = express();

const PORT = 3001;

// books  routes
app.use("/api/books", booksRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
