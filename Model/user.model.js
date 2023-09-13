const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  mail: String,
  mobile: Number,
  idea: String,
  estimate: Number,
  mentorship: Boolean,
});
 
const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
