import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Video from './pages/Video/Video';
import Board from './pages/Board/Board';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/board' element={<Board />} />
        <Route path='/video' element={<Video />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
