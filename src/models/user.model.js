const mongoose = require("mongoose");
// const moment = require("moment");

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
})

const User = mongoose.model("user", userSchema);

module.exports = User;