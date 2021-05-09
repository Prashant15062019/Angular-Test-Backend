const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    ProfileImage: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("Users", User);
