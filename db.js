const mongoose = require("mongoose");

function connectDb() {
  mongoose
    .connect(
      "mongodb+srv://aman123:aman123@cluster0.uluvlcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log(err);
      throw Error(err);
    });
}

module.exports = connectDb;

// db.js
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       "mongodb+srv://aman123:aman123@cluster0.uluvlcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//     );
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectDB;
