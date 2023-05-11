import React, { useState,useEffect } from "react";
import "./Alumni.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Alumni() {
  const { user } = useAuth0();
  let newAlumniName = React.createRef();
  let newCompanyName = React.createRef();
  let newPosition = React.createRef();
  let newPassout = React.createRef();
  let newLinkedIn = React.createRef();

  const [alumni, setAlumni] = useState([
    {
      id: 0,
      name: "Aastha Chaudhary",
      company: "HealthKart",
      position: "SDE - I",
      passoutYear: "2022-23",
      linkedIn: "https://www.linkedin.com/in/aastha-chaudhary-4b21271a0/",
    },
    {
      id: 1,
      name: "Aaditya Raj Sharma",
      company: "Capgemini",
      position: "Backend",
      passoutYear: "2022-23",
      linkedIn: "sdhfsafjd",
    },
    {
      id: 2,
      name: "Garima Kushwaha",
      company: "Amantya",
      position: "Testing",
      passoutYear: "2022-23",
      linkedIn: "dfweff",
    },
  ]);
  const [ToName, setToName] = useState("");
  const chatMsg = (event) => {
    const name = event.target.getAttribute("data-name");
    if (name != null) setToName(name);
  };
  useEffect(() => {
    const storedList = localStorage.getItem("alumni");
    if (storedList) {
      setAlumni(JSON.parse(storedList));
    }
  }, []);
  const createNewUser = () => {
    const Name = newAlumniName.current.value;
    const Company = newCompanyName.current.value;
    const Position = newPosition.current.value;
    const PassoutYear = newPassout.current.value;
    const LinkedIn = newLinkedIn.current.value;

    const newObj = {
      id: alumni.length + 1,
      name: Name,
      company: Company,
      position: Position,
      passoutYear: PassoutYear,
      linkedIn: LinkedIn,
    };
    newAlumniName.current.value = "";
    newCompanyName.current.value = "";
    newPosition.current.value = "";
    newPassout.current.value = "";
    newLinkedIn.current.value = "";

    setAlumni([...alumni, newObj]);
  };
  useEffect(() => {
    localStorage.setItem("alumni", JSON.stringify(alumni));
  }, [alumni]);
  const deleteUser= (id) =>{
    const filteredList = alumni.filter((obj) => obj.id !== id);
    setAlumni(filteredList);
  }

  return (
    <div className="alumniSec">
      <h1>Alumni</h1>
      <br></br>
      <p>
        👉 Alumni, who have already gone through similar
        experiences and have established careers, can provide insight and
        guidance on how to navigate various challenges. By building
        relationships with alumni, individuals can tap into their expertise and
        gain access to networks that can open doors to new opportunities.
      </p>
      {user.role === "admin" ? (
        <div className="createUser">
          <input type="text" placeholder="Student Name" ref={newAlumniName} />
          <input type="text" placeholder="Company Name" ref={newCompanyName} />
          <input
            type="text"
            placeholder="Position In Company"
            ref={newPosition}
          />
          <input type="text" placeholder="PassOut Year" ref={newPassout} />
          <input
            type="text"
            placeholder="LinkedIn profile link"
            ref={newLinkedIn}
          />
          <button onClick={createNewUser}>Create</button>
        </div>
      ) : (
        ""
      )}
      <div className="alumniCard" onMouseOver={chatMsg}>
        {alumni.map(
          ({ id, name, company, position, passoutYear, linkedIn }) => (
            <div className="alumniDetails" key={id} data-name={name}>
              <h4 className="name">{name}    {(user.role === "admin")? <button onClick={()=>deleteUser(id)} style={{fontSize:'1rem',marginLeft:'1.2rem'}}>Delete</button>:null}</h4>
              <div className="detailKeyValue">
                <div className="alumniKey">
                  <p>
                    <b>Company :</b>
                  </p>
                  <p>
                    <b>Position :</b>{" "}
                  </p>
                  <p>
                    <b>Passout Year :</b>{" "}
                  </p>
                  <p>
                    <b>
                      -&gt; <a href={linkedIn}>LinkedIn</a> &lt;-
                    </b>
                  </p>
                </div>
                <div className="alumniValue">
                  <p>{company}</p>
                  <p>{position}</p>
                  <p>{passoutYear}</p>
                </div>
              </div>
              <Link to="/alumniChat" state={{ Name: ToName }}>
                <button id="chat">Chat</button>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
