import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/user'

const Header = ({ isLogined })=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutBtn = ()=>{
        dispatch(login({ isLogined : false }))
        navigate('/')
    }
    return(
        <div id='Header'>
            <div className='Wrap'>
                <Link to='/'>
                    <img className='Logo' src={ Logo } alt="" />
                </Link>
                <div>
                    <Link to='/about' className='Menu'>About</Link>
                    <Link to='/board' className='Menu'>Board</Link>
                    <Link to='/video' className='Menu'>Video</Link>
                    <Link to='/chat' className='Menu'>Chat</Link>
                </div>

                { 
                    !isLogined 
                    ?
                    <div>
                        <Link to='/login' className='Menu'>Login</Link>
                        <Link to='/signup' className='Menu'>SignUp</Link>
                    </div>
                    :
                    <div>
                        <Link to='/mypage' className='Menu'>My Page</Link>
                        <button onClick={ logoutBtn } className='Menu'>Logout</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header