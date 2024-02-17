import React, { useState } from 'react'

export default function Demo() {
    const [userName,setUserName]=useState('');
    const [displayText,setDisplayText]=useState('');

    const handleUserName = (e) =>{
        setUserName(e.target.value);
        console.log(userName);
    }
    const handlerSubmit = () =>{
        setDisplayText(userName)
    }
  return (
    <div>
        <input type="text" placeholder='Enter your name' value={userName} onChange={handleUserName}/>
        <button onClick={handlerSubmit}>Submit</button>
        <h2>Welcome {displayText}</h2>

    </div>
  )
}
