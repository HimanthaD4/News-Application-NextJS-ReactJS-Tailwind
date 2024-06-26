const mongoose = require("mongoose");
const { isEmail } = require("validator");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    minlength: [6, "Minimum password length is 6"],
  },
});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
