const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.board = require("./board.model");
db.chatRoom = require("./chatRoom.model");
db.chatMessage = require("./chatMessage.model");

module.exports = db;