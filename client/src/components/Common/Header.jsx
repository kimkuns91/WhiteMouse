import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = ({ isLogined, setSideBar })=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutBtn = ()=>{
        dispatch(login({ isLogined : false }))
        navigate('/')
    }
    return(
        <div id='Header'>
            <WebHeader logoutBtn = { logoutBtn } isLogined = { isLogined }/>
            <MobileHeader logoutBtn = { logoutBtn } isLogined = { isLogined } setSideBar={ setSideBar }/>
        </div>
    )
}
const WebHeader = ({ logoutBtn, isLogined })=>{
    return(
        <div className='Wrap WebHeader'>
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
    )
}
const MobileHeader = ({ setSideBar, isLogined })=>{
    return(
        <div className='MobileHeader'>
            <FontAwesomeIcon className='MobileMenu' icon={ faBars } onClick={ ()=>{
                setSideBar(true)
            }}/>
            <Link to='/'>
                <img className='Logo' src={ Logo } alt="" />
            </Link>
            { 
                !isLogined 
                ?
                <div>
                    <Link to='/login' className='Menu'>
                        <FontAwesomeIcon icon={ faRightToBracket } />
                    </Link>
                </div>
                : <FontAwesomeIcon icon={ faUser }  className='MobileMenu'/>
            }
        </div>
    )
}

export default Header