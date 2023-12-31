import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faComment, faGear, faPaperPlane, faPlus, faRocket, faUser } from '@fortawesome/free-solid-svg-icons'

import './Chat.css'

import CatProfile from '../../assets/images/CatProfile.png'
import MouseProfile from '../../assets/images/MouseProfile.png'
import { fetchUserInfo } from "../../service/userService";

const socket = io('http://localhost:8081');

const Chat = ({ userInfo }) => {
    const [ chatRooms, setChatRooms ] = useState([]);
    const [ selectedRoom, setSelectedRoom ] = useState("");
    const [ chatRoomLists, setChatRoomLists ] = useState(true)

    const handleRoomClick = (roomId) => {
        setSelectedRoom(roomId);
    };

    useEffect(() => {     
        fetchUserInfo({ id: userInfo.id }).then(result =>
            console.log(result.data)        
        )
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
    const [ input, setInput ] = useState("");
    const [ loading, setLoading ] = useState(true);
    const { id, nickname } = userInfo
    const messageEndRef = useRef()

    useEffect(() => {
        socket.emit("joinRoom", roomId);

        socket.on('message', (roomMessages)=>{
            setMessages(roomMessages)
        });
        setLoading(false)
        return () => {
          socket.emit("leaveRoom", roomId);
          socket.off("message");
        };
    }, [roomId]);

    useEffect(() => {
        // 채팅 메시지 수신
        socket.on('chat message', async (message) => {
            await setMessages((prevMessages) => [...prevMessages, message])
        });
        if(!loading){
            messageEndRef.current.scrollIntoView();
        }
        return () => {
            // 컴포넌트 언마운트 시 소켓 이벤트 핸들러 제거
            socket.off('chat message');
        };
      }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (input) {
            socket.emit('chat message', {
                roomId, 
                chat : input, 
                user: id
            });
            setInput('');
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
                messages.map((message, index) =>                     
                    <div key={index}>
                        {
                            message.user !== id
                            ?                      
                            <div className="ChatContent ChatContentLeft" key={index}>
                                <div className="ProfileImg ProfileImgLeft">
                                    <img src={ CatProfile } alt="CatProfile" />
                                </div>
                                <p>{ message.chat }</p>
                            </div>
                            : 
                            <div className="ChatContent ChatContentRight" key={index}>
                                <p>{ message.chat }</p>
                                <div className="ProfileImg ProfileImgRight">
                                    <img src={ MouseProfile } alt="CatProfile" />
                                </div>
                            </div>
                        }
                        <div ref={ messageEndRef }></div>
                    </div>
                )
            }
            </div>
            <div className="ChatInputWrap">
                <input 
                        className="Text02"
                        placeholder="메세지를 입력하세요"
                        type="text"
                        value={ input }
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e)=>{
                            if(e.key === "Enter") {
                                sendMessage(e)
                            }
                        }}
                />
                <button onClick={ sendMessage }>
                    <FontAwesomeIcon className="Text02" icon={ faPaperPlane } />
                </button>
            </div>
        </div>
    )
}

export default Chat;