const passport = require("passport");
const User = require("../models/user");

const renderLogin = async (req, res) => {
  res.render("login");
};

const logUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });


  // console.log( req.body.username,req.body.password)


  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, async () => {

        {req.session.username = req.body.username;
        const uid = await User.findOne({ username: req.body.username})
        const uid2 = uid._id.toString();
        req.session.userID = uid2;}

        res.redirect(`/`);
      });
    }
  });
}


module.exports = {
  renderLogin,
  logUser,
};
