import './WebRTC.css'
import { useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";

const participants = [1, 2, 3, 4, 5, 6, 7]

const WebRTC = ()=>{
    const [ videoMode, setVideoMode] = useState(false)
    const [ chat, setChat ] = useState('')
    const socketRef = useRef();
    const myVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const pcRef = useRef();
  
    const { roomName } = useParams();
  
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
  
        if (myVideoRef.current) {
          myVideoRef.current.srcObject = stream;
        }
        if (!(pcRef.current && socketRef.current)) {
          return;
        }
        stream.getTracks().forEach((track) => {
          if (!pcRef.current) {
            return;
          }
          pcRef.current.addTrack(track, stream);
        });
  
        pcRef.current.onicecandidate = (e) => {
          if (e.candidate) {
            if (!socketRef.current) {
              return;
            }
            console.log("recv candidate");
            socketRef.current.emit("candidate", e.candidate, roomName);
          }
        };
  
        pcRef.current.ontrack = (e) => {
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = e.streams[0];
          }
        };
      } catch (e) {
        console.error(e);
      }
    };
  
    const createOffer = async () => {
      console.log("create Offer");
      if (!(pcRef.current && socketRef.current)) {
        return;
      }
      try {
        const sdp = await pcRef.current.createOffer();
        pcRef.current.setLocalDescription(sdp);
        console.log("sent the offer");
        socketRef.current.emit("offer", sdp, roomName);
      } catch (e) {
        console.error(e);
      }
    };
  
    const createAnswer = async (sdp) => {
      console.log("createAnswer");
      if (!(pcRef.current && socketRef.current)) {
        return;
      }
  
      try {
        pcRef.current.setRemoteDescription(sdp);
        const answerSdp = await pcRef.current.createAnswer();
        pcRef.current.setLocalDescription(answerSdp);
  
        console.log("sent the answer");
        socketRef.current.emit("answer", answerSdp, roomName);
      } catch (e) {
        console.error(e);
      }
    };
  
    useEffect(() => {
      socketRef.current = io("localhost:8081");
  
      pcRef.current = new RTCPeerConnection({
        iceServers: [
          {
            urls: "stun:stun.l.google.com:19302",
          },
        ],
      });
  
      socketRef.current.on("all_users", (allUsers) => {
        if (allUsers.length > 0) {
          createOffer();
        }
      });
  
      socketRef.current.on("getOffer", (sdp) => {
        console.log("recv Offer");
        createAnswer(sdp);
      });
  
      socketRef.current.on("getAnswer", (sdp) => {
        console.log("recv Answer");
        if (!pcRef.current) {
          return;
        }
        pcRef.current.setRemoteDescription(sdp);
      });
  
      socketRef.current.on("getCandidate", async (candidate) => {
        if (!pcRef.current) {
          return;
        }
  
        await pcRef.current.addIceCandidate(candidate);
      });
  
      socketRef.current.emit("join_room", {
        room: roomName,
      });
  
      getMedia();
  
      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
        }
        if (pcRef.current) {
          pcRef.current.close();
        }
      };
    }, []);

    return(
        <div className='WebRTC'>
            <div className={
                !chat
                ? 'VideoWrap'
                : 'VideoWrap VideoWrapActive'
                }>
                <div className='VideoMode'>
                  {
                    videoMode
                    ? <Presenter participants={ participants } />
                    : <Gallery />
                  }
                </div>
                {/* <div className='VideoLists'>

                </div>
                <div className='VideoSection'>
                    <video
                        id="remotevideo"
                        ref={myVideoRef}
                        autoPlay
                    />
                </div> */}
                <div className='ControlBar'>
                  <button className='ControlBtn'>마이크</button>
                  <button className='ControlBtn'>화면</button>
                  <button className='ControlBtn' onClick={()=>{setChat(!chat)}}>채팅</button>
                  <button className='ControlBtn' onClick={()=>{setVideoMode(!videoMode)}}>보기</button>
                </div>
            </div>
            <div className={
                !chat
                ? 'ChatWrap'
                : 'ChatWrap ChatActive'
                }></div>
        </div>
    )
}
const Presenter = ({ participants })=>{
  const participantsNum = ()=>{
    if(participants.length === 1){
      return 1
    }
    if(participants.length === 2){
      return 2
    }
    if(participants.length >= 3){
      return 3
    }
  }
  const participantsStyle = {
    width : `calc(100% / ${ participantsNum()} )`,
    height: '250px',
    background : 'red'
  }
  return(
    <div className='Presenter'>
      <p className='Title01'>Presenter</p>
      <div className='PresenterWrap'>
        {
          participants.map((participant, i)=>
            <div className='Title01' style={ participantsStyle }>
              { participant }
            </div>
          )
        }
      </div>
    </div>
  )
}
const Gallery = ({ participants })=>{
  const [ selected, setSelected ]= useState(0)
  const mainParticipant = ()=>{
    participants(selected)
  }
  return(
    <div className='Gallery'>
      <div></div>
      <div></div>
    </div>
  )
}
export default WebRTC