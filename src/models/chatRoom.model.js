const mongoose = require("mongoose");
const moment = require("moment");

const chatRoomSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    max : { 
        type: Number,
        required: true,
        default: 10, // 기본적으로 10명
        min: 2, // 최소 인원 2명
    },
    owner: { // 방장
        type: String,
        required: true,
    },
    password: String, 
    createdAt: { 
        type: String, 
        default: moment().format("YYYY-MM-DD hh:mm:ss") 
    },
    updatedAt: { 
        type: String 
    },
    
})

const ChatRoom = mongoose.model("chatRoom", chatRoomSchema);

module.exports = ChatRoom;