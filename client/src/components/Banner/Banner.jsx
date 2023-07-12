import { useEffect, useState } from "react"
import './Banner.css'

const Banner = ({ banner })=>{
    const [ bannerImg, setBannerImg ] = useState('Main')
    useEffect(()=>{
        if(banner === 'About'){
            setBannerImg('About')
        }
    }, [banner])
    return(
        <div className='Banner'>    
            <div className={`${bannerImg}`}>
                <h3 className="Title02">{ bannerImg }</h3>
            </div>
        </div>
    )
}
export default Banner