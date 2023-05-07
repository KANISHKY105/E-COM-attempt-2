const passport = require("passport");
const User = require("../models/user");

const saveUser = (req, res) => {
  User.register({ username: req.body.username }, req.body.password, (err, userk) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error registering user" });
    } else {
      passport.authenticate("local")(req, res, () => {
        res.status(200).json({ message: "User registered successfully" });
      });
    }
  });
};

module.exports = {
  saveUser,
};
