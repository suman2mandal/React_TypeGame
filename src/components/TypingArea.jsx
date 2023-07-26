import React from 'react'
import {useState,useEffect} from 'react';

function TypingArea() {
    const [text,setText] = useState('');
    const [index,updateIndex] = useState(0);

    useEffect(() => {
    },[]);

    const handleText=(e)=>{
        setText(e.target.value[index]);
        console.log(text);
        updateIndex(index+1);
    }
  return (
    <>
        <input type="text" placeholder="Type here..." onChange={handleText} />
    </>
  )
}

export default TypingArea