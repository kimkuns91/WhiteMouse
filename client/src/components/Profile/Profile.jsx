import './Profile.css'
import ProfileImg from '../../assets/images/Profile.jpg'

const Profile = ()=>{
    return(
        <div className='Profile'>
            <div>
                <div>
                    <p className='Title03'>개발자</p>
                    <p className='Title02'>김건우입니다<span className='Strong'>.</span></p>
                </div>
                <div>
                    <p className='Text01'>React, NodeJS 전문</p>
                </div>
                <a className='ProfileBtn' href="/counsel/write">Contact</a>
            </div>
            <div>
                <div className='ProfileImg'>
                    <img alt="ProfileImg" src={ ProfileImg } />
                </div>
            </div>
        </div>
    )
}
export default Profile