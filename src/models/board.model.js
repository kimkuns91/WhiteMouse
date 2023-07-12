const mongoose = require("mongoose");
const moment = require("moment");

const boardSchema = new mongoose.Schema({
    category : { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    views: {
        type: Number,
        default: 0
    },    
    createdAt: { type: String, default: moment().format("YYYY-MM-DD hh:mm:ss") },
    updatedAt: { type: String },
})

const Board = mongoose.model("board", boardSchema);

module.exports = Board;