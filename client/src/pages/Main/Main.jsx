import Introduce from '../../components/Introduce/Introduce'
import Profile from '../../components/Profile/Profile'
import Search from '../../components/Search/Search'
import './Main.css'

// images
import NodeJSIcon from '../../assets/images/nodejs_2.png'
import JavascriptIcon from '../../assets/images/Javascript.png'
import ReduxIcon from '../../assets/images/Redux.png'
import ReactIcon from '../../assets/images/React.png'


const Main = ()=>{
    return(
        <div className='Main'>
            <Section01 />
            <Section02 />
            <Section03 />
            <div className='Wrap'>
                <h3 className='Title02'>The Programming Language of the Universe</h3>
            </div>
            <Section04 />
        </div>
    )
}
const Section01 = ()=>{
    return(
        <div className='Section01'>
            <div className="bannerImg">
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                    </defs>
                    <g className="parallax">
                        <use className='wave_1' xlinkHref="#gentle-wave" x="48" y="0" />
                        <use className='wave_2' xlinkHref="#gentle-wave" x="48" y="3" />
                        <use className='wave_3' xlinkHref="#gentle-wave" x="48" y="5" />
                        <use className='wave_4' xlinkHref="#gentle-wave" x="48" y="7" />
                    </g>
                </svg>  
            </div>
        </div>
    )
}
const Section02 = ()=>{
    return(
        <div className='Section02'>
            <Search />
        </div>
    )
}
const Section03 = ()=>{
    return(
        <div className='Section03 Wrap'>
            <div>
                <Profile />
            </div>
            <div>
                <Introduce />
            </div>
        </div>
    )
}
const Section04 = ()=>{
    return(
        <div className='Section04'>
            <div className='Wrap'>
                <img className='Planet NodeJSIcon' src={ NodeJSIcon } alt="" />
                <img className='Planet ReactIcon' src={ ReactIcon } alt="" />
                <img className='Planet JavascriptIcon' src={ JavascriptIcon } alt="" />
                <img className='Planet ReduxIcon' src={ ReduxIcon } alt="" />
            </div>
        </div>
    )
}

export default Main