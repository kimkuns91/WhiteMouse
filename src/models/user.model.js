const mongoose = require("mongoose");
const moment = require("moment");

const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email : { type: String, required: true },
    nickname : { type: String, default: '생쥐'},
    createdAt: { type: String, default: moment().format("YYYY-MM-DD hh:mm:ss") },
    updatedAt: { type: String },
    friends : { type: Array }
})

const User = mongoose.model("user", userSchema);

module.exports = User;