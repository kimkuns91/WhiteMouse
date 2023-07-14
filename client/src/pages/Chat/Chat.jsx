import axios from "axios";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import './Chat.css'

const socket = io('http://localhost:8081');

const Chat = () => {
    const [chatRooms, setChatRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState("");

    const handleRoomClick = (roomId) => {
        setSelectedRoom(roomId);
    };

    useEffect(() => {
        socket.on("chatRooms", (rooms) => {
            setChatRooms(rooms);
        });

        socket.emit("getChatRooms");
    
        return () => {
          socket.off("chatRooms");
        };
    }, []);

  return (
    <div className="Chat">
        <div className="Container Wrap">
            <h2 className="Title02">White Mouse Chats</h2>
            <div className="ChatWrap">
                <div className="ChatRoomLists">
                {
                    chatRooms.map((room) => (
                        <p className="Title02" onClick={ ()=>{ handleRoomClick(room._id) } }>
                            {room.title}
                        </p>
                    ))
                }
                </div>
                <ChatRoom roomId={ selectedRoom } />
            </div>
        </div>
    </div>
  );
};

const ChatRoom = ({ roomId })=>{
    const [ messages, setMessages ] = useState([]);
    const [ newMessage, setNewMessage ] = useState("");
    console.log(messages)
    useEffect(() => {
        socket.emit("joinRoom", roomId);

        socket.on("message", (message) => {
            console.log(message)
            // setMessages(message)
        //   setMessages((prevMessages) => [...prevMessages, message]);
        });
    
        return () => {
          socket.emit("leaveRoom", roomId);
          socket.off("message");
        };
    }, [roomId]);

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            // 메시지를 서버로 전송합니다.
            socket.emit("sendMessage", { roomId, message: newMessage });
            setNewMessage("");
        }
    };
    return(
        <div className="ChatRoom">
            <div className="ChatContent">
                <ul>
                    {
                        messages.map((message, index) => (
                            <li key={index}>{message}</li>
                        ))
                    }
                </ul>
            </div>
            <form onSubmit={handleMessageSubmit}>
                <div className="ChatInput">
                    <input 
                         type="text"
                         value={newMessage}
                         onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button type="submit">보내기</button>
                </div>
            </form>
        </div>
    )
}

export default Chat;