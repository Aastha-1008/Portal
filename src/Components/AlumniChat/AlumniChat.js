import React, { useState, useEffect } from "react";
import "./AlumniChat.css";
import qs from "qs";
import { useLocation } from "react-router-dom";
import { chat, fetchMsgs } from "../DetailsService";
import { useAuth0 } from "@auth0/auth0-react";
import grad from "./grad.png";

export default function AlumniChat() {
  const { user } = useAuth0();
  const [msgValue, setMsgValue] = useState();
  const [msgChat, setMsgChat] = useState([]);
  const FromName = user.nickname;
  const location = useLocation();
  var ToName = location.state.Name;

  const MsgRead = () => {
    setMsgValue(document.getElementById("enterMsg").value);
  };

  const fetchMsg = async () => {
    const alumniAndStudent = {
      FromName: user.nickname,
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
      SoftDelete: 0,
    };
    await chat(qs.stringify(requestBodyArray))
      .then((response) => {
        console.log(response);
        document.getElementById("enterMsg").value = "";
      })
      .catch((error) => console.log(error));

    fetchMsg();
    
  };

  

  return (
    <div className="alumniSec">
      <h1>
        <img src={grad} alt="graduation" /> {ToName}
      </h1>
    
      <div className="messageSection" id="displayChat">
        {msgChat.map(({ fromToMsg, message, msgDate }) => (
          <div>
            {fromToMsg === 1 ? (
              <div className="right">
                <p>{message}</p>
                <br />
              </div>
            ) : (
              <div className="left">
                <p>{message}</p>
                <br />
              </div>
            )}
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
