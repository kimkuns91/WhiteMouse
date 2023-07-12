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

function App() {
  const isLogined = useSelector((state) => state.user.value.isLogined)
  console.log(isLogined)
  const [ writeMode, setWriteMode ] = useState(false)
  return (
    <div className="App">
      {
        !writeMode
        ? <Header isLogined={ isLogined }/>
        : null
      }
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/write' element={<BoardWrite writeMode={ writeMode } setWriteMode={ setWriteMode }/>} />
        <Route path='/board/:postId' element={<BoardView />} />
        <Route path='/video' element={<Video />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
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
