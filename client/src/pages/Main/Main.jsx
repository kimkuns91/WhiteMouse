import './Main.css'

const Main = ()=>{
    return(
        <div className='Main'>
            <Section01 />
            <Section02 />
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

        </div>
    )
}

export default Main