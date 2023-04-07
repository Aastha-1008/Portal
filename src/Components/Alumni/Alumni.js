import React,{useState} from 'react';
import "./Alumni.css";
import { Link } from 'react-router-dom';

export default function Alumni() {
    const alumni = [
        {
            id : 0,
            name : "Aastha Chaudhary",
            company: "HealthKart",
            position: "SDE - I",
            passoutYear: "2022-23",
            linkedIn: "https://www.linkedin.com/in/aastha-chaudhary-4b21271a0/"
        },
        {
            id:1,
            name: "Aaditya Raj Sharma",
            company: "Capgemini",
            position: "Backend",
            passoutYear: "2022-23",
            linkedIn: "sdhfsafjd"
        },
        {
            id:2,
            name:"Garima Kushwaha",
            company: "Amantya",
            position: "Testing",
            passoutYear: "2022-23",
            linkedIn:"dfweff"
        }
    ];
    const [alumniName,setAlumniName] = useState('');
    const chatMsg=(event)=>{
        const name = event.target.getAttribute('data-name');
        if(name != null)
        setAlumniName(name);
    }
  return (
    <div className='alumniSec'>
        <h1>Alumni</h1><br></br>
        <p>👉 Connecting with alumni can be an invaluable resource for individuals looking to solve any kind of problem or enhance their knowledge in a particular area. Alumni, who have already gone through similar experiences and have established careers, can provide insight and guidance on how to navigate various challenges. By building relationships with alumni, individuals can tap into their expertise and gain access to networks that can open doors to new opportunities.</p>
        <div className='alumniCard' onMouseOver={chatMsg}>
            {alumni.map(({id,name,company,position,passoutYear,linkedIn}) =>(
                
                <div className= "alumniDetails" key={id} data-name={name} >
                    <h4 className = "name">{name}</h4> 
                    <div className='detailKeyValue' >
                        <div className='alumniKey'>
                            <p><b>Company :</b></p>
                            <p><b>Position :</b> </p>
                            <p><b>Passout Year :</b> </p>
                            <p><b>-&gt; <a href={linkedIn}>LinkedIn</a> &lt;-</b></p>
                        </div>
                        <div className='alumniValue'>
                            <p>{company}</p>
                            <p>{position}</p>
                            <p>{passoutYear}</p> 
                        </div>
                    </div>    
                    <Link to = "/alumniChat" state={{alumni : alumniName}}><button id = "chat" >Chat</button></Link>
                </div>
            ))}
        </div>``

    </div>
  )
}
