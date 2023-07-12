import './Login.css'

const Login = ()=>{
    return(
        <div className='Login'>
            <div className='Container Wrap'>
                <div className='LoginInput'>
                    <label htmlFor="">아이디</label>
                    <input type="text" />
                    <label htmlFor="">비밀번호</label>
                    <input type="text" />
                    <button>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Login