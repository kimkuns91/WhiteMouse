import { useSearchParams } from "react-router-dom";
import GoogleSmall from '../../assets/images/GoogleSmall.png'
import GoogleAsset03 from '../../assets/images/GoogleAsset03.png'
import FakeIcon from '../../assets/images/FakeIcon.png'
import './ResultChatGPT.css'

const ResultChatGPT = ()=>{
    const [ searchParams, setSearchParams ] = useSearchParams();
    const keyword = searchParams.get('keyword');
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
                <div className="ResultList">
                    <div className="ResultListHead">
                        <img className="FakeIcon" src={ FakeIcon } alt="FakeIcon" />
                        <div className="ResultListHeadText">
                            <p>namu.wiki</p>
                            <p>https://namu.wiki</p>
                        </div>
                    </div>
                    <a className="ResultListTitle">G-DRAGON - 나무위키</a>
                    <p className="ResultListContent"><span>2023. 7. 3. — </span>G-DRAGON은 2세대를 상징하는 K-POP 그룹인 BIGBANG의 리더이자 정신적 지주, 작곡가, 당대 최고의 남성 솔로 가수로 평가받는다. 특히 프로듀싱 능력이 ...</p>
                </div>
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