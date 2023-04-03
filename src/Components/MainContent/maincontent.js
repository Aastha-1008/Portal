import React,{useState} from 'react'
import Sidenavbar from '../sideNavbar/sidenavbar';
import About from '../About/About';
import Recruitment from '../Recruitment/Recruitment';
import MainCon from '../MainCon/MainCon';
import Contact from '../Contact/Contact';
import Student from '../Student/Student';
import Company from "../Company/Company"

export default function MainContent () {

  const[state,setState] = useState("company");
  function setParentValue(value){
    setState(value)
  }

  return (
    <div><br/><br/>
        <Sidenavbar setValue = {setParentValue} />
        {state === "maincon" && <MainCon/>};
        {state === "about" && <About/>};
        {state === "student" && <Student/>}
        {state === "company" && <Company/>}
        {state === "recruitment" && <Recruitment/>}
        {state === "contact" && <Contact/> }
    </div>
  );
}
 