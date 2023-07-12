import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { readBoard } from "../../service/boardService"
import Loading from "../../components/Loading/Loading"
import './BoardView.css'
const BoardView = ()=>{
    const { postId } = useParams()
    const [ board, setBoard ] = useState({})

    useEffect(()=>{
        readBoard({ postId })
            .then(response => setBoard(response.data))
            .catch(err =>
                console.log(err.message.message)    
            )
    },[postId])
    return(
        <div className="BoardView Container Wrap">
            {
                !board
                ? <Loading />
                : <Board board={ board }/>
            }
        </div>
    )
}
const Board = ({ board })=>{
    return(
        <div>
            <div className="BoardViewHead">
                <p className="Text02 Bold">{ board.category }</p>
                <p className="Title02 Bold">{ board.title }</p>
                <p className="Text03 Gray">{ board.name }</p>
                <p className="Text03 Gray">{ board.createdAt }</p>
            </div>
            <div className="BoardViewBody">
                <div className="White" dangerouslySetInnerHTML={{ __html : board.content }}/>
            </div>
        </div>
    )
}
export default BoardView