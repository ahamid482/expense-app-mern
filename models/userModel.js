const mongoose = require("mongoose");

// Designing schema for user

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: email,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

// exporting schema
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
