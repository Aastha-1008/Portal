import React, { useState } from 'react';
import './AlumniChat.css';
import {useLocation} from 'react-router-dom';

export default function AlumniChat() {
  const[alumni,setAlumniName] = useState();
  const[msg,setMsg]  = useState();
  const studentName = "Aastha";
  const location = useLocation();

  const MsgRead = () => {
    setAlumniName(location.state.alumni);
    setMsg(document.getElementById("enterMsg").value); 
  }
  const SendMsg = () =>{
    console.log(msg,alumni,studentName);
  }


  return (
    <div className="alumniSec">
        <h1>Alumni Interaction Section</h1>
        <div className="messageSection">

        </div>
        <div className="messagePart">
            <div className='Msg'>
                <input type = "text" name = "Msg" placeholder='Enter your message here...' id="enterMsg" onChange={MsgRead}></input>
            </div>
            <div className='sendMsg'>
              <button  onClick={SendMsg}>SEND</button>
            </div>
        </div>
    </div>
  )
}
