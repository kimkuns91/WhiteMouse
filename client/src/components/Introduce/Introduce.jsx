import { useEffect, useState } from "react";
import './Introduce.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Introduce =()=>{
    const [ status, setStatus ] = useState('기사')
    const [ news, setNews ] = useState([{
      company : '로톡뉴스',
      createdAt : ' 2022.08.24',
      title : '편의점 주인 폭행해 ‘실명 위기’ 만든 중학생…위자료는 얼마?',
      url : '/'
    }, {
      company : '법률방송뉴스',
      createdAt : ' 2022.08.24',
      title : '57년 전 ‘혀 절단’ 재심청구 기각… 박준영 변호사 “검찰총….',
      url : '/'
    },{
      company : '로톡뉴스',
      createdAt : ' 2022.08.24',
      title : '공무원 실수로 사라진 ‘내 투표권’…국가가 보상해야….',
      url : '/'
    },{
      company : 'JTBC',
      createdAt : ' 2022.08.24',
      title : '[이런법이] 성범죄 맞서다 가해자 다치면?…’정당방위’ 달….',
      url : '/'
    },])
    const [ records, setRecords ] = useState([
    {
      years : '2016',
      contents : '리그오브레전드 국가대표'
    },{
      years : '2018',
      contents : '게임프로그래밍 자격증'
    },{
      years : '2019',
      contents : '가톨릭대학교 정보통신전자공학부 학사 졸업'
    },{
      years : '2019',
      contents : '정보처리기사 자격증'
    },{
      years : '2019',
      contents : 'NiceGameTV 영상 편집'
    },{
      years : '2021',
      contents : '린케어 주식회사 CEO'
    }])
    return(
      <div className="Introduce">
        <div className="ControlBar" >
          <div onClick={()=>{
            setStatus('기사')
          }} className=          {
            status === '기사'
            ? 'ControlNews Active'
            : 'ControlNews'
          }>
            <p className="Text01">관련기사</p>
          </div>
          <div onClick={()=>{
            setStatus('약력')
          }} className= {
            status === '약력'
            ? 'ControlRecord Active'
            : 'ControlRecord'
          }>
            <p className="Text01">약력 자세히 보기</p>
          </div>
        </div>
        <div className="Contents">
          {
            status === '기사'
            ? <News news={ news } />            
            : <Record records={ records }/>
          }
        </div>
      </div>
    )
}
const News =({ news })=>{
  return(
    <div className="newsList">
      {
        !news
        ? null
        : <>
        {
          news.map((a, i)=>{
            return(
              <div className="newsList" key={ i }>
                <div className="newsHead">
                  <p className="Text03">{ a.company }</p>
                  <p className="Text03">{ a.createdAt }</p>
                </div>
                <p className="Text02">{ a.title }</p>
              </div>
            )
          })
        }
        </>
      }
    </div>
  )
}
const Record =({ records })=>{
  const [ more, setMore ] = useState(false)
  const [ filtered, setFiltered ] = useState(records.slice(0, 5))

  const handleMore = ()=>{
    setMore(!more)
  }
  useEffect(()=>{
    if(more){
      setFiltered(records)
    } else {
      setFiltered(records.slice(0, 5))
    }
  }, [more])

  return(
    <div className="recordLists">
      {
        !filtered
        ? null
        : <>
        {
          filtered.map((a, i)=>{
            return(
              <div className="recordList">
                <p className="recordYear Text01">{ a.years } -</p>
                <p className="recordContent Text01">{ a.contents }</p>
              </div>
            )
          })
        }
        </>
      }
      {
        !more
        ? <p className="moreBtn" onClick={ handleMore }>약력 더보기 <FontAwesomeIcon icon={ faChevronDown } /></p>
        : <p className="closeBtn" onClick={ handleMore }>접기 <FontAwesomeIcon icon={ faChevronUp } /></p>
      }
    </div>
  )
}
export default Introduce;