import { Link, useNavigate, useSearchParams } from "react-router-dom";
import GoogleSmall from '../../assets/images/GoogleSmall.png'
import GoogleAsset03 from '../../assets/images/GoogleAsset03.png'
import FakeIcon from '../../assets/images/FakeIcon.png'
import './ResultChatGPT.css'
import { useState } from "react";
import { chatAi } from "../../service/openAiService";

const ResultChatGPT = ()=>{
    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();
    const keyword = searchParams.get('keyword');
    const [ dummyData, setDummyData ] = useState([])
    const [ fetchData, setFetchData ] = useState()
    const [ loading, setLoading ] = useState(false)
    useState(()=>{
        const data = [{
            source : 'namu.wiki',
            link : 'https://namu.wiki',
            title : `${keyword} - WhiteMouseDeveloper`,
            date : '2023. 7. 3. ',
            content : `${keyword}은 2세대를 상징하는 K-POP 그룹인 BIGBANG의 리더이자 정신적 지주, 작곡가, 당대 최고의 남성 솔로 가수로 평가받는다. 특히 프로듀싱 능력이 ...`
        },{
            source : 'wikipedia.org',
            link : 'https://ko.wikipedia.org',
            title : `무료로 ${keyword} 시작하기 - 위키백과, 우리 모두의 백과사전`,
            date : '2022. 3. 28. ',
            content : `${keyword}는 1972년 켄 톰슨과 데니스 리치가 벨 연구소에서 일할 당시 새로 개발된 유닉스 운영 체제에서 사용하기 위해 개발한 프로그래밍 언어이다. 켄 톰슨은 BCPL언어를 ...`
        },{
            source : 'opentutorials.org',
            link : 'https://opentutorials.org',
            title : `${keyword} 무료강의 - 위키백과, 우리 모두의 백과사전`,
            date : '2019. 1. 13. ',
            content : `${keyword} 시작하기. 프로그래밍 언어는 인간과 컴퓨터가 대화를 하기 위한 언어입니다. 인간이 명령을 내리고 컴퓨터가 실행하기 때문에, 기계어보다는 ...`
        },{
            source : 'tcpshool.com',
            link : 'https://www.tcpshool.com',
            title : `제5강 ${keyword}과 연산자 - 코딩의 시작, TCP School`,
            date : '2023. 7. 3. ',
            content : `${keyword}는 현재 사용되고 있는 거의 모든 컴퓨터 시스템에서 사용할 수 있는 프로그래밍 언어입니다. 현재 널리 사용되는 주요 운영체제의 커널은 대부분 C언어를 이용해 ...`
        },{
            source : 'yonsei.ac.kr',
            link : 'https://web.yonsei.ac.kr',
            title : `기록을 위해 ${keyword} - 쉽게 풀어쓴 C언어 Express`,
            date : '2023. 7. 3. ',
            content : `${keyword}은 2세대를 상징하는 K-POP 그룹인 BIGBANG의 리더이자 정신적 지주, 작곡가, 당대 최고의 남성 솔로 가수로 평가받는다. 특히 프로듀싱 능력이 ...`
        },{
            source : 'lawandpeople.co.kr',
            link : 'https://lawandpeople.co.kr',
            title : `쉽게 ${keyword} 배워보자 - 쉽게 풀어쓴 C언어 Express`,
            date : '2023. 7. 3. ',
            content : `${keyword}은 2세대를 상징하는 K-POP 그룹인 BIGBANG의 리더이자 정신적 지주, 작곡가, 당대 최고의 남성 솔로 가수로 평가받는다. 특히 프로듀싱 능력이 ...`
        },{
            source : 'wordow.com',
            link : 'https://web.yonsei.ac.kr',
            title : `영어 한글 더미텍스트 ${keyword} 생성기 추천 `,
            date : '2023. 7. 3. ',
            content : `${keyword}은 2세대를 상징하는 K-POP 그룹인 BIGBANG의 리더이자 정신적 지주, 작곡가, 당대 최고의 남성 솔로 가수로 평가받는다. 특히 프로듀싱 능력이 ...`
        },{
            source : 'bab.la',
            link : 'https://ko.bab.la',
            title : `${keyword} - 쉽게 풀어쓴 C언어 Express`,
            date : '2023. 7. 3. ',
            content : `${keyword}은 2세대를 상징하는 K-POP 그룹인 BIGBANG의 리더이자 정신적 지주, 작곡가, 당대 최고의 남성 솔로 가수로 평가받는다. 특히 프로듀싱 능력이 ...`
        },{
            source : 'tistory.com',
            link : 'https://kkandol.tistory.com',
            title : `${keyword} 배워보기`,
            date : '2023. 7. 3. ',
            content : `${keyword}은 2세대를 상징하는 K-POP 그룹인 BIGBANG의 리더이자 정신적 지주, 작곡가, 당대 최고의 남성 솔로 가수로 평가받는다. 특히 프로듀싱 능력이 ...`
        },{
            source : 'wordow.com',
            link : 'https://web.wordow.com',
            title : `${keyword} - 쉽게 풀어쓴 C언어 Express`,
            date : '2023. 7. 3. ',
            content : `${keyword}은 2세대를 상징하는 K-POP 그룹인 BIGBANG의 리더이자 정신적 지주, 작곡가, 당대 최고의 남성 솔로 가수로 평가받는다. 특히 프로듀싱 능력이 ...`
        },]
        setDummyData(data)
    }, [keyword])
    useState(()=>{
        setLoading(true)
        chatAi({ chat : keyword })
            .then(result=>{
                setFetchData(result.data)
                setLoading(false)
            })
    }, [])

    const LinkBtn = ()=>{
        const checkLoading = ()=>{
            if(loading){
                return true
            }
            if(!loading){
                return false
            }
        }
        if(loading){
            const intervalId = setInterval(checkLoading(), 1000);
            console.log(checkLoading())
            if(!intervalId){
                return navigate('/chatgpt/board', { state : fetchData })
            }
        }
        // if(!loading){
        //     return navigate('/chatgpt/board', { state : fetchData })
        // }
    }
    return(
        <div className="ResultChatGPT">
            <div className="ResultHeader">
                <a href="/chatgpt">
                    <img className="GoogleSmall" src={ GoogleSmall } alt="GoogleSmall" />
                </a>
                <div className="ResultInputWrap">
                    <input type="text" defaultValue={ keyword } />
                    <img className="GoogleAsset03" src={ GoogleAsset03 } alt="GoogleAsset03" />
                </div>
            </div>
            <div className="ResultBody">
                <p className="FakeText">검색결과 약 1,320,000,000개 (0.34초)</p>
                {
                    dummyData.map((a, i)=>
                        <div className="ResultList">
                            <div className="ResultListHead">
                                <img className="FakeIcon" src={ FakeIcon } alt="FakeIcon" />
                                <div className="ResultListHeadText">
                                    <p>{ a.source }</p>
                                    <p>{ a.link }</p>
                                </div>
                            </div>
                            <p onClick={ LinkBtn } className="ResultListTitle">{ a.title } - 나무위키</p>
                            <p className="ResultListContent"><span>2023. 7. 3. — </span>{ a.content }</p>
                        </div>
                    )
                }
               
            </div>
            {
                keyword
                ? <p className="Title01">{ keyword }</p>
                : null
            }
        </div>
    )
}
export default ResultChatGPT