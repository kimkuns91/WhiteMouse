import { useEffect, useState } from 'react';
import TextEditor from '../../components/TextEditor/TextEditor'
import './BoardWrite.css'
import { createBoard } from '../../service/boardService';
import { useNavigate } from 'react-router-dom';

const BoardWrite = ()=>{
    const navigate = useNavigate()
    const [ category, setCategory ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    console.log('title', title)
    console.log('content', content)

    const writeEndBtn = ()=>{
        createBoard({ category, title, content })
            .then(response => {
                if(response.data.message === "Success"){
                    alert('글 작성이 완료 되었습니다.')
                    navigate('/board')
                }
            } )
            .catch(err => console.log(err.message.mssage))

    }
    return(
        <div className='BoardWrite'>
            <TextEditor 
                title={ title } 
                setTitle={ setTitle } 
                setCategory = { setCategory }
                content={ content } 
                setContent={ setContent } 
                writeEndBtn={ writeEndBtn }
            />
        </div>
    )
}

export default BoardWrite