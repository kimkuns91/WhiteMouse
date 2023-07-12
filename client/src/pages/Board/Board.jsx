import CatFrame from '../../components/CatFrame/CatFrame'
import { Link } from 'react-router-dom'
import './Board.css'

const Board = ()=>{
    return(
        <div className='Board'>
            <div className='Container Wrap'>
                <CatFrame />
                <div className='PostList'>
                    <div className='PostHead'>
                        <div className='PostHead01 Text01'>
                            <p>분류</p>
                        </div>
                        <div className='PostHead02 Text01'>
                            <p>제목</p>
                        </div>
                        <div className='PostHead03 Text01'>
                            <p>작성자</p>
                        </div>
                        <div className='PostHead04 Text01'>
                            <p>날짜</p>
                        </div>
                    </div>
                    <div className='PostBody'>
                        <div className='PostHead01'>
                            <p>JavaScript</p>
                        </div>
                        <div className='PostHead02'>
                            <Link>
                                <p>Nodejs로 홈페이지 만들기</p>
                            </Link>
                        </div>
                        <div className='PostHead03'>
                            <p>김건우</p>
                        </div>
                        <div className='PostHead04'>
                            <p>23.07.11</p>
                        </div>
                    </div>
                </div>
                <button className='WriteBtn'>글쓰기</button>
            </div>
        </div>
    )
}


export default Board