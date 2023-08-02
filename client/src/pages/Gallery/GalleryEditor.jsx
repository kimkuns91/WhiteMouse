import { useState } from "react"
import { useNavigate } from "react-router-dom"

const GalleryEditor = ()=>{
    const navigate = useNavigate()
    const [ title, setTitle ] = useState('')
    const [ desc, setDesc ] = useState('')
    const [ image, setImage ] = useState('')
    return(
        <div>
            
        </div>
    )
}
export default GalleryEditor