import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios';

function Message() {
    const [quote,setQuote] = useState('');
    const [author,setAuthor] = useState('');

    const handleQuote=(data)=>{
        return data.spit('').map((letter)=>{
            return <span className='correct'>{letter}</span>
        });
    }
    useEffect(() => {
        const process = async()=>{
            const response = await axios.get('https://api.quotable.io/random');
            let processed = handleQuote(response.data.content);
            setQuote(processed);
            setAuthor(response.data.author);
        }

        process();
    },[]);
  return (
    <div>{quote}
    <q>__{author}__</q>
    </div>
  )
}

export default Message