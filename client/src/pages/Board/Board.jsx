import CatFrame from '../../components/CatFrame/CatFrame'
import { Link, useNavigate } from 'react-router-dom'
import './Board.css'
import { useEffect, useState } from 'react'
import { loadBoard } from '../../service/boardService'
import Loading from '../../components/Loading/Loading'

const Board = ()=>{
    const [ data, setData ] = useState([])
    console.log(data)
    const navigate = useNavigate()
    const writeBtn = ()=>{
        navigate('/board/write')
    }
    useEffect(()=>{
        loadBoard()
            .then(response => {
                setData(response.data)
            })
            .catch(err =>
                console.log(err.message.message)    
            )
    }, [])
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
                    {
                        !data
                        ? <Loading />
                        :
                        <>
                            {
                                data.map((a, i) => 
                                    <div className='PostBody' key={ i }>
                                        <div className='PostHead01'>
                                            <p>{ a.category }</p>
                                        </div>
                                        <div className='PostHead02'>
                                            <Link to={`/board/${ a._id }`}>
                                                <p>{ a.title }</p>
                                            </Link>
                                        </div>
                                        <div className='PostHead03'>
                                            <p>{ a.name }</p>
                                        </div>
                                        <div className='PostHead04'>
                                            <p>{ a.createdAt }</p>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                       
                    }
                </div>
                <button className='WriteBtn' onClick={ writeBtn }>글쓰기</button>
            </div>
        </div>
    )
}


export default Board