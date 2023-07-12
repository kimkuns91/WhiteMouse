import React, { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import TextareaAutosize from 'react-textarea-autosize';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css'
import { useNavigate } from 'react-router-dom';

const TextEditor = ({ title, setCategory, setTitle, content, setContent, setWriteMode, writeEndBtn })=>{
    const quillRef = useRef()
    const navigate = useNavigate()
    const modules = useMemo(() => {
        return {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6,false] }],
              ["bold", "italic", "underline", "strike", 'blockquote'],
              [{ list: "ordered" }, { list: "bullet" }, {'indent' : '-1'}, {'indent' : '+1'}],
              ["link", "image"],
              [{ align: [] }, { color: [] }, { background: [] }],
              ['clean']
            ],
            // handlers: {
            //   image: handleImageUpload,
            // },
          },
        }
      }, [])

    const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'image',
    ];
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
          e.preventDefault(); // Enter 키 입력 막기
        }
    };
    const handleCategory = (e) => {
        setCategory(e.target.value)
    };
    const handleTitle = (e) => {
        setTitle(e.target.value)
    };
    const writeCancelBtn = ()=>{
        navigate('/board')
        setWriteMode(false)
    }
    return (
      <div className='TextEditorWrap'> 
        <div className='TextEditor'>
            <select name="" id="" onChange={ handleCategory }>
                <option value="카테고리 없음">카테고리 없음</option>
                <option value="React">React</option>
                <option value="NodeJS">NodeJS</option>
            </select>
            <TextareaAutosize 
                cacheMeasurements 
                className='TitleInput' 
                type="text" 
                placeholder='제목을 입력하세요' 
                onKeyDown={ handleKeyDown } 
                onChange={ handleTitle }
            />
            <ReactQuill 
                ref={quillRef}
                value={content}
                onChange={setContent}
                placeholder="내용을 입력하세요"
                theme="snow"
                modules={modules}
                formats={formats}
            />
        </div>
        <div className='TextEditorBottom'>
            <div className='TextEditorBottomWrap'>
                <button className='writeEndBtn' onClick={ writeCancelBtn }>뒤로가기</button>
                <button className='writeEndBtn' onClick={ writeEndBtn }>완료</button>
            </div>
        </div>
      </div>
    );  
}

export default TextEditor