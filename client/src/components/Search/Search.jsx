import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CatFrame from '../CatFrame/CatFrame'

const Search = ()=>{
    return(
        <div className="Search">
            <CatFrame />
            <div className="Wrap">
                <input className="SearchInput Text01" type="text" placeholder='검색할 내용을 입력하세요' name="" id="" />
                <button className="SearchBtn Title02">
                    <FontAwesomeIcon icon={ faSearch } />
                </button>
            </div>
        </div>
    )
}
export default Search