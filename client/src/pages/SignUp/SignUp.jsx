import { useState } from "react"
import { checkUnique, createUser } from "../../service/userService"
import { useNavigate } from "react-router-dom"
import './SignUp.css'
import CatFrame from "../../components/CatFrame/CatFrame"

const SignUp = ()=>{
    const navigate = useNavigate()
    const [ input, setInput ] = useState({
        id : '',
        password : '',
        name : '',
        email : ''
    })
    const [ passwordConfirm, setPasswordConfirm ] = useState()
    const { id, password, name, email } = input
    const [ uniqueID, setUniqueID ] = useState()

    const handleInput = (e)=>{
        setInput({
            ...input,
            [ e.target.name ] : e.target.value
        })
    }
    const checkUniqueID = ()=>{
        checkUnique({ id })
            .then(response=>{
                setUniqueID(response.data.message)
            })
            .catch((err)=>{
                alert(`ERR : ${ err.message.message }`)
            })
    }
    const handlePasswordConfirm = (e)=>{
        if(password === e.target.value){
            return setPasswordConfirm('비밀번호가 일치합니다.')
        }
        if(password !== e.target.value){
            return setPasswordConfirm('비밀번호가 일치하지 않습니다')
        }
    }
    const signUpBtn = ()=>{
        if(!id || !password || !name || !passwordConfirm || !email){
            return alert('모든 정보를 입력해주세요')
        }
        if(!uniqueID){
            return alert('아이디 중복 검사를 해주세요.')
        }
        if(uniqueID === '중복된 아이디입니다.'){
            return alert('중복된 아이디입니다.' )
        }
        if(passwordConfirm === '비밀번호가 일치하지 않습니다'){
            return alert('비밀번호가 일치하지 않습니다')
        }
        if(uniqueID === '사용 가능한 아이디입니다.' ){
            return createUser({
                id,
                password,
                name,
                email
            })            
            .then(response=>{
                if(response.data.message === "중복된 아이디입니다."){
                    return alert('중복된 아이디입니다.' )
                }
                if(response.data.message === "Success"){
                    alert('회원가입이 완료되었습니다.')
                    navigate('/')
                }
            })
            .catch((err)=>{
                alert(`ERR : ${ err.message }`)
            })

        }        
    }
    return(
        <div className="SignUp">
            <CatFrame />
            <div className="Container Wrap">
                <label className="Title02" htmlFor="id">아이디</label>
                <input type="text" onChange={ handleInput } name='id' />
                <button onClick={ checkUniqueID }>아이디 중복 검사</button>
                {
                    !uniqueID
                    ? null
                    : <p className="Text01">{ uniqueID }</p>
                }
                <label className="Title02" htmlFor="password">비밀번호</label>
                <input type="password" onChange={ handleInput } name='password'/>
                <label className="Title02" htmlFor="passwordConfirm">비밀번호 확인</label>
                <input type="password" onChange={ handlePasswordConfirm } name='passwordConfirm'/>
                {
                    !passwordConfirm
                    ? null
                    : <p className="Text01">{ passwordConfirm }</p>
                }
                <label className="Title02" htmlFor="name">이름</label>
                <input type="text" onChange={ handleInput } name='name'/>
                <label className="Title02" htmlFor="email">이메일</label>
                <input type="text" onChange={ handleInput } name='email'/>
                <button onClick={ signUpBtn }>로그인</button>
            </div>
        </div>
    )
}
export default SignUp