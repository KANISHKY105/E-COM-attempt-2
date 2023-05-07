const User = require("../models/user");

const renderUserInfo = async (req, res) => {

  const userID = req.session.userID;

  const result = await User.findOne({ _id: userID })
  // console.log(result)
  
  if(result){
    // Set user information to render in the template
    const userInfo = {
      email: result.username,
      name: result.name,
      phone: result.phone,
      address: result.address,
      pincode: result.pincode
    }
    // console.log(userInfo)
    res.render("userInfo", {userInfo})
  } else{
  res.render("userInfo");
  }
};

const saveUserInfo = async (req, res) => {
  const { name, phone, address, pincode } = req.body;

  email = req.session.username;

  const fieldsToUpdate = {};
  if (name) fieldsToUpdate.name = name;
  if (phone) fieldsToUpdate.phone = phone;
  if (address) fieldsToUpdate.address = address;
  if (pincode) fieldsToUpdate.pincode = pincode;

  const userID = req.session.userID;

  const result = await User.updateOne(
    { _id: userID },
    { $set: fieldsToUpdate },
    { upsert: false }
  );

  if (!result) {
    res.status(500).json({
      message: "Failed to save user info to database",
    });
  } else {
    res.status(200).json({
      message: "User info saved to database",
      userId: result.modifiedCount,
    });
  }
};

module.exports = {
  renderUserInfo,
  saveUserInfo,
};
