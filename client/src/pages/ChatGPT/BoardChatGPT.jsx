import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const BoardChatGPT = ()=>{
    const { state } = useLocation();
    const [ content, setContent ] = useState('');
    useEffect(()=>{
        setContent(state.content)
    }, [])
    return(
        <div className="ChatGPT">
            <div className="Wrap Container">
                <div className="Title01">
                { !content
                    ? null
                    : 
                    <p className="Title01">{ content }</p>
                }
                </div>
            </div>
        </div>
    )
}
export default BoardChatGPT