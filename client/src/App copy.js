import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Video from './pages/Video/Video';
import Board from './pages/Board/Board';
import BoardWrite from './pages/BoardWrite/BoardWrite';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import BoardView from './pages/BoardView/BoardView';
import SignUp from './pages/SignUp/SignUp';
import Chat from './pages/Chat/Chat';
import SideBar from './components/SideBar/SideBar';
import ChatGPT from './pages/ChatGPT/ChatGPT';
import ResultChatGPT from './pages/ChatGPT/ResultChatGPT';
import BoardChatGPT from './pages/ChatGPT/BoardChatGPT';
import WebRTC from './pages/WebRTC/WebRTC';
import Layout from './pages/Layout/Layout';
import Hide from './pages/Layout/Hide';

function App() {
  const userInfo = useSelector((state) => state.user.value)
  const isLogined = useSelector((state) => state.user.value.isLogined)
  const [ writeMode, setWriteMode ] = useState(false)
  const [ sideBar, setSideBar ] = useState(false)

  return (
    <div className="App">
      {
        !writeMode
        ? <Header isLogined={ isLogined } setSideBar={ setSideBar }/>
        : null
      }
      <SideBar sideBar={ sideBar } setSideBar={ setSideBar }/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/write' element={<BoardWrite writeMode={ writeMode } setWriteMode={ setWriteMode }/>} />
        <Route path='/board/:postId' element={<BoardView />} />
        <Route path='/video' element={<Video />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat userInfo={ userInfo }/>} />
        <Route path='/chatgpt' element={<ChatGPT />} />
        <Route path='/chatgpt/result' element={<ResultChatGPT />} />
        <Route path='/chatgpt/board' element={<BoardChatGPT />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/webrtc' element={<WebRTC />} />
        <Route path='/layout' element={<Layout />}>
          <Route path='' element={<Main />} />
        </Route>
        <Route path='/hide' element={<Hide />}>
          <Route path='board' element={<Board />} />
        </Route>
      </Routes>
      {
        !writeMode
        ? <Footer />
        : null
      }
    </div>
  );
}

export default App;
