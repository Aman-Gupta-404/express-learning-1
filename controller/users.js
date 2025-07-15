const Users = require("../model/users");

const signupUser = (req, res) => {
  try {
    const userData = req.body;
    const result = Users.create(userData);

    if (result) {
      res.status(201).send("User signup successful");
    } else {
      res.status(400).send("Error in singup");
    }
  } catch (error) {
    res.status(400).send("Error in singup");
  }
};

module.exports = {
  signupUser,
};
