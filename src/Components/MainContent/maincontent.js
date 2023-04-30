import React from 'react'
import Sidenavbar from '../sideNavbar/sidenavbar';
import About from '../About/About';
import Recruitment from '../Recruitment/Recruitment';
import MainCon from '../MainCon/MainCon';
import Contact from '../Contact/Contact';
import Student from '../Student/Student';
import Company from "../Company/Company";
import Alumni from "../Alumni/Alumni.js";
import AlumniChat from '../AlumniChat/AlumniChat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function MainContent () {



  return (
    <div><br/><br/>
      <Router> 
        <Sidenavbar />
        <Routes>
            <Route exact path = "/" element = {<MainCon/>}/>
            <Route exact path = "about" element = {<About/>}/>
            <Route exact path = "recruitment" element = {<Recruitment/>}/>
            <Route exact path= "student" element = {<Student/>} />
            <Route exact path = "alumni" element = {<Alumni/>}/>
            <Route exact path = "contact" element = {<Contact/>}/>
            <Route exact path = "company" element = {<Company/>}/>
            <Route exact path = "alumniChat" element = {<AlumniChat/>}/>
        </Routes>
      </Router>
    </div>
  );
}
 