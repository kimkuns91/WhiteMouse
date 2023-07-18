import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faComment, faGear, faPaperPlane, faPlus, faRocket, faUser } from '@fortawesome/free-solid-svg-icons'

import './Chat.css'

import CatProfile from '../../assets/images/CatProfile.png'
import MouseProfile from '../../assets/images/MouseProfile.png'

const socket = io('http://localhost:8081');

const Chat = ({ userInfo }) => {
    const [ chatRooms, setChatRooms ] = useState([]);
    const [ selectedRoom, setSelectedRoom ] = useState("");
    const [ chatRoomLists, setChatRoomLists ] = useState(true)

    const handleRoomClick = (roomId) => {
        setSelectedRoom(roomId);
    };

    useEffect(() => {     
        socket.emit("getChatRooms");
        socket.on("chatRooms", (rooms) => {
            setChatRooms(rooms);
        });
    
        return () => {
          socket.off("chatRooms");
        };
    }, []);

  return (
    <div className="Chat">
        <div className="ChatWrap">
            <ChatRoomLists 
                chatRooms = { chatRooms }
                chatRoomLists = { chatRoomLists }
                handleRoomClick = { handleRoomClick }
            />
            { selectedRoom && <ChatRoom roomId={ selectedRoom } 
                chatRoomLists = { chatRoomLists }
                setChatRoomLists={ setChatRoomLists } 
                userInfo = { userInfo }
            /> }
        </div>
    </div>
  );
};
const ChatRoomLists = ({ chatRooms, chatRoomLists, handleRoomClick })=>{
    const [ category, setCategory ] = useState('친구')

    return(
        <div className={
            chatRoomLists
            ? "ChatRoomLists"
            : "ChatRoomLists ChatRoomListsHide"
        }>
            <div className="ChatRoomListsHead">
                <h2 className="Title02">White Mouse Chats</h2>
            </div>
            <div className="ChatRoomListsCategory">
                <p className="Title03">{ category }</p>
                <FontAwesomeIcon className="Text01 PlusBtn" icon={ faPlus } />
            </div>
            {
                category === '친구'
                ? null
                :
                <div className="ChatRoomListsWrap">
                    {
                        chatRooms.map((room, index) => (
                            <div key={ index } className="ChatRoomList" onClick={ ()=>{ handleRoomClick(room._id) } }>
                                <p className="Text01">{room.title}</p>
                            </div>
                        ))
                    }
                </div>
            }
            <div className="ChatRoomListsController">
                <div onClick={()=>{
                    setCategory('친구')
                }}>
                    <FontAwesomeIcon className="Text01" icon={ faUser } />
                </div>
                <div onClick={()=>{
                    setCategory('채팅방')
                }}>
                    <FontAwesomeIcon className="Text01" icon={ faComment } />
                </div>
                <div onClick={()=>{
                    setCategory('설정')
                }}>
                    <FontAwesomeIcon className="Text01" icon={ faGear } />
                </div>
            </div>
        </div>  
    )
}
const ChatRoom = ({ roomId, chatRoomLists, setChatRoomLists, userInfo })=>{
    const [ messages, setMessages ] = useState([]);
    const [ newMessage, setNewMessage ] = useState("");
    const { id, nickname } = userInfo
    const messageEndRef = useRef()
    console.log(messages)
    // console.log(messages)
    useEffect(() => {
        socket.emit("joinRoom", roomId);
        socket.on("chatHistory", (roomMessages)=>{
            setMessages(roomMessages)
        });

        return () => {
          socket.emit("leaveRoom", roomId);
          socket.off("message");
        };
    }, [roomId]);

    useEffect(()=>{
        socket.on("message", (message)=>{
            setMessages([
                ...messages, 
                message
            ])
            // messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
        })
    },[messages])

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            socket.emit("sendMessage", { roomId, message: newMessage, user: id });
            setNewMessage("");
        }
    };

    const handleChatRoomLists = ()=>{
        setChatRoomLists(!chatRoomLists)
    }

    return(
        <div className={
            chatRoomLists
            ? "ChatRoom"
            : "ChatRoom ChatRoomActive"
        }
        >
            <button className="Text02 ChatSideBtn" onClick={ handleChatRoomLists }>
                {
                    chatRoomLists
                    ? <FontAwesomeIcon icon={ faAngleLeft } />
                    : <FontAwesomeIcon icon={ faAngleRight } />
                }
            </button>
            <div className="ChatContentWrap">
                {
                    messages.map((message, index) => (
                        <p key={index} className="Text01">{ message.chat }</p>
                    )
                    // <div key={index}>
                    //     {
                    //         message.user !== id
                    //         ?                      
                    //         <div className="ChatContent ChatContentLeft" key={index}>
                    //             <div className="ProfileImg ProfileImgLeft">
                    //                 <img src={ CatProfile } alt="CatProfile" />
                    //             </div>
                    //             <p>{ message.chat }</p>
                    //         </div>
                    //         : 
                    //         <div className="ChatContent ChatContentRight" key={index}>
                    //             <p>{ message.chat }</p>
                    //             <div className="ProfileImg ProfileImgRight">
                    //                 <img src={ MouseProfile } alt="CatProfile" />
                    //             </div>
                    //         </div>
                    //     }
                    //     <div ref={ messageEndRef }></div>
                    // </div>
                    )
                }
            </div>
            <div className="ChatInputWrap" onSubmit={handleMessageSubmit}>
                <input 
                        className="Text02"
                        placeholder="메세지를 입력하세요"
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e)=>{
                            if(e.key === "Enter") {
                                handleMessageSubmit(e)
                            }
                        }}
                />
                <button onClick={ handleMessageSubmit }>
                    <FontAwesomeIcon className="Text02" icon={ faPaperPlane } />
                </button>
            </div>
        </div>
    )
}

export default Chat;