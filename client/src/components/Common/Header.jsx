import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'

const Header = ()=>{
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
                </div>
                <div>
                    <Link to='/login' className='LoginBtn'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Header