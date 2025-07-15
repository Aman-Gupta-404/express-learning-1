const express = require("express");
const connectDb = require("./db");

// importing routes files
const booksRouter = require("./routes/books");

const connectDB = require("./db");

connectDB();

const app = express();

// parse req body to json
app.use(express.json());

const PORT = 3001;

// books  routes
app.use("/api/books", booksRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
