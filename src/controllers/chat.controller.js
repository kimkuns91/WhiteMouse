const db = require("../models");
const { 
    chatRoom : ChatRoom,
    chatMessage : ChatMessage 
} = db;

const moment = require("moment");

exports.createRoom = async (req, res) => {
    const { title, owner } = req.body

    const chatRoom = new ChatRoom({
        title, 
        owner,
        createdAt : moment().format("YYYY-MM-DD hh:mm:ss")
    })
    
    await chatRoom.save()
        .then(()=> {
                return res.status(200).json({ message : "Success"})
        })
        .catch(err => res.json(err))
}