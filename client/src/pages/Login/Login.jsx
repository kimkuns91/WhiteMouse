import { useState } from 'react'
import { signInUser } from '../../service/userService'
import './Login.css'
import { login } from '../../redux/user'
import { useNavigate } from 'react-router-dom'
import CatFrame from '../../components/CatFrame/CatFrame'
import { useDispatch } from 'react-redux'

const Login = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ input, setInput ] = useState({
        id : '',
        password : ''
    })
    const { id, password } = input
    const handleInput = (e)=>{
        setInput({
            ...input,
            [ e.target.name ] : e.target.value
        })
    }
    const LoginBtn = ()=>{
        signInUser({ id, password })
        .then(response => {
            if(response.data.message === 'Success'){
                dispatch(login({ isLogined : true }))
                navigate('/')
            }
        })
        .catch(err => {
            alert(err.request.response)
        })
    }
    return(
        <div className='Login'>
            <CatFrame />
            <div className='LoginWrap'>
                <div className='LoginInput'>
                    <label htmlFor="id">아이디</label>
                    <input type="text" onChange={ handleInput } name='id' />
                    <label htmlFor="password">비밀번호</label>
                    <input type="text" onChange={ handleInput } name='password'/>
                    <button onClick={ LoginBtn }>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Login