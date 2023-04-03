import "./App.css";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Recruitment from "./Components/Recruitment/Recruitment.js"
import Contact from "./Components/Contact/Contact.js";
import Company from "./Components/Company/Company.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div class="body1">
          <div class="top_navbar">
            <div class="logo">EduGeeks</div>
            <div class="menu">
              <div class="hamburger">
                <i class="fas fa-bars"></i>
              </div>
            </div>
          </div>
          <Routes>
            <Route exact path = "/" element = {<Home />}/>
            <Route exact path = "/about" element = {<About/>}/>
            <Route exact path = "/recruitment" element = {<Recruitment/>}/>
            <Route exact path = "/contact" element = {<Contact/>}/>
            <Route exact path = "/company" element = {<Company/>}/>
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
