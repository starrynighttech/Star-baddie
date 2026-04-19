const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  email: String,
  password: String,
  balance: { type: Number, default: 0 },
  role: { type: String, default: "user" }
})

module.exports = mongoose.model("User", schema)
