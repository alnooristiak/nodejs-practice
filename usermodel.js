const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/firstproject`);

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

// mongo db user ke users kore dibe
module.exports = mongoose.model("user", userSchema);
