import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Message.css";

function Message() {
  const [interactions, setInteractions] = useState([]);
  const [newInteraction, setNewInteraction] = useState({
    studentName: "",
    alumniName: "",
    message: "",
  });

  useEffect(() => {
    getInteractions();
  }, []);

  const getInteractions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/interactions");
      setInteractions(response.data);
    } catch (error) {
      console.error(error);
    }
  }; 

  const handleInteractionChange = (event) => {
    const { name, value } = event.target;
    setNewInteraction((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/interactions",
        newInteraction
      );
      setInteractions([...interactions, response.data]);
      setNewInteraction({ studentName: "", alumniName: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="message">
      <h2>Alumni Interaction Section</h2>
      <div className="msg">
        <ul>
          {interactions.map((interaction) => (
            <li key={interaction.id}>
              <p>
                {interaction.studentName} &lt;--&gt; {interaction.alumniName}
              </p>
              <p>{interaction.message}</p>
              <p>{interaction.dateTime}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="dataForm">
        <form onSubmit={handleSubmit}>
          <div className="bottomMsg">
            <input
              className="studentName"
              type="text"
              name="studentName"
              placeholder="Enter your name"
              value={newInteraction.studentName}
              onChange={handleInteractionChange}
            />

            <input
              className="messageInteraction"
              type="text"
              name="message"
              placeholder="Enter a message"
              value={newInteraction.message}
              onChange={handleInteractionChange}
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Message;
