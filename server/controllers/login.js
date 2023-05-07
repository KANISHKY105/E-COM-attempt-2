const passport = require("passport");
const User = require("../models/user");

const logUser = async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    req.login(user, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Authentication error" });
      }
      passport.authenticate("local")(req, res, async () => {
        req.session.username = req.body.username;
        const uid = await User.findOne({ username: req.body.username });
        const uid2 = uid._id.toString();
        req.session.userID = uid2;
        const userData = {
          username: req.body.username,
          userID: uid2,
        };

        res.status(200).json({ success: true, data: userData });
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  logUser,
};
