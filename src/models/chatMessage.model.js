const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;
const { Types: { ObjectId }} = Schema;

const chatMessageSchema = new mongoose.Schema({
    room: { // 채팅방 아이디
        type: ObjectId,
        required: true,
        ref: 'Room', // Room 스키마와 연결해 Room 컬렉션의 ObjectId가 들어가게 됨
    },
    user: { // 채팅을 한 사람
        type: String,
        required: true,
    },
    chat: { 
        type: String
    },
    gif:  { 
        type: String
    },
    createdAt: { 
        type: String, 
        default: moment().format("YYYY-MM-DD hh:mm:ss") 
    },
    updatedAt: { type: String },
})

const ChatMessage = mongoose.model("chatMessage", chatMessageSchema);

module.exports = ChatMessage;