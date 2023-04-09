import React, { useState, useEffect } from "react";
import "./AlumniChat.css";
import qs from "qs";
import { useLocation } from "react-router-dom";
import { chat, fetchMsgs } from "../DetailsService";

export default function AlumniChat() {
  // const [alumniName, setAlumniName] = useState();
  const [msgValue, setMsgValue] = useState();
  const [msgChat,setMsgChat] = useState([]);
  const FromName = "Aastha";
  const location = useLocation();
  var ToName = location.state.Name;
  
  const MsgRead = () => {
    setMsgValue(document.getElementById("enterMsg").value);
  };

  const fetchMsg = async () => {
    const alumniAndStudent = {
      FromName: "Aastha",
      ToName: ToName,
    };
    await fetchMsgs(qs.stringify(alumniAndStudent))
      .then((response) => {
        setMsgChat(response.data.body);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
      fetchMsg();
  },[]);

  console.log(ToName);

  
  const SendMsg = async () => {
    const requestBodyArray = {
      FromName: FromName,
      ToName: ToName,
      MsgValue: msgValue,
      FromToMsg: 1,
    };
    await chat(qs.stringify(requestBodyArray))
      .then((response) => {
        console.log(response);
        document.getElementById("enterMsg").value = "";
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="alumniSec">
      <h1>Alumni Interaction Section</h1>

      <div className="messageSection">
        {msgChat.map(({fromToMsg,message,msgDate}) => (
          <div>
          {(fromToMsg === 1)?
            <div className="right">
              <p>{message}</p><br/>
            </div>
          :
            <div className="left">
              <p>{message}</p><br/>
            </div>
          }
         
          </div> 
        ))}
      </div>

      <div className="messagePart">
        <div className="Msg">
          <input
            type="text"
            name="Msg"
            placeholder="Enter your message here..."
            id="enterMsg"
            onChange={MsgRead}
          ></input>
        </div>
        <div className="sendMsg">
          <button onClick={SendMsg}>SEND</button>
        </div>
      </div>
    </div>
  );
}
