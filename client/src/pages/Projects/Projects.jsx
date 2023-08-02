import './Projects.css'
import SampleImg from '../../assets/images/SampleImg.jpg'

const projectList = [
    {
        url : "/project/chatgpt",
        image : SampleImg,
        title : 'Geegle',
        content : 'ChatGPT를 이용한 서치엔진'
    },
    {
        url : "/project/webrtc",
        image : SampleImg,
        title : 'Goom',
        content : '화상채팅 기능'
    },
    {
        url : "/webrtc",
        image : SampleImg,
        title : 'Goom',
        content : '화상채팅 기능'
    },
    {
        url : "/webrtc",
        image : SampleImg,
        title : 'Goom',
        content : '화상채팅 기능'
    },
    {
        url : "/webrtc",
        image : SampleImg,
        title : 'Goom',
        content : '화상채팅 기능'
    },
]

const Projects = ()=>{
    return(
        <div className="Projects">
            <div className='Wrap'>
                <h3 className='Title01'>White Mouse Projects</h3>
                <div className='ProjectList'>
                    {
                        projectList.map( project =>
                            <a className='Project' href={ project.url }>
                                <div className='ProjectImg'>
                                    <img src={ project.image } alt="Img" />
                                </div>
                                <div className='ProjectText'>
                                    <p className='ProjectTitle Title03'>{ project.title }</p>
                                    <p className='ProjectContent Text02'>{ project.content }</p>
                                </div>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Projects