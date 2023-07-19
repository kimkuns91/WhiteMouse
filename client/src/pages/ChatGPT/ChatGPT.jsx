import { useState } from "react";
import { chatAi } from "../../service/openAiService";
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../assets/images/google_logo.svg'
import GoogleAsset01 from '../../assets/images/GoogleAsset01.png'
import GoogleAsset02 from '../../assets/images/GoogleAsset02.png'

import './ChatGPT.css'

const ChatGPT = ()=>{
    const navigate = useNavigate();
    const [ input, setInput ] = useState('')
    const handleInput = (e)=>{
        setInput(e.target.value)
    }
    const sendBtn = ()=>{
        navigate(`/chatgpt/result?keyword=${input}`);
        // chatAi({ chat : input })
        // .then(result=>{
        //     navigate(`/chatgpt/result/search&keyword=${input}`);
        //     // navigate('/chatgpt/result', { state: result.data });
        // })
    }
    return(
        <div className="ChatGPT">
            <div className="ChatGPTWrap">
                <img className="GoogleLogo" src={ GoogleLogo } alt="GoogleLogo" />
                <div className="GoogleInputWrap">
                    <img className="GoogleAsset01" src={ GoogleAsset01 } alt="GoogleAsset01" />
                    <input className="GoogleInput" type="text" onChange={ handleInput } onKeyDown={(e)=>{
                        if(e.key === 'Enter'){
                            sendBtn()
                        }
                    }}/>
                    <img className="GoogleAsset02" src={ GoogleAsset02 } alt="GoogleAsset02" />
                </div>
            </div>
        </div>
    )
}
export default ChatGPT