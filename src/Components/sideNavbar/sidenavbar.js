import React,{useState} from "react";
import "./sideNavbar.css";
import { Link } from "react-router-dom";

export default function  Sidenaavbar({setValue}) {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <div className="sideNavbar">
      
      <div className="sidebar">
        <div className="sidebar_inner">
          <ul>
            <li>
              <Link to="/" className={activeLink === "home" ? "active" : ""} onClick={() => handleLinkClick("home")}>
                <span class="icon">
                  <i className="fa fa-qrcode"></i>
                </span>
                <span className="text">Home</span>
              </Link>
            </li>

            <li>
              <Link to="/about" className={activeLink === "about" ? "active" : ""}
            onClick={() => handleLinkClick("about")}>
                <span className="icon">
                  <i className="fa fa-link"></i>
                </span>
                <span className="text">About</span>
              </Link>
            </li>
            <li>
              <Link to="/student"  className={activeLink === "student" ? "active" : ""}
            onClick={() => handleLinkClick("student")}>
                <span className="icon">
                  <i className="fa fa-eye"></i>
                </span>
                <span className="text">Student</span>
              </Link>
            </li>
            <li>
              <Link to="/company" className={activeLink === "company" ? "active" : ""}
            onClick={() => handleLinkClick("company")}>
                <span className="icon">
                  <i className="fa fa-book"></i>
                </span>
                <span className="text">Company</span>
              </Link>
            </li>
            <li>
              <Link to="/recruitment" className={activeLink === "recruitment" ? "active" : ""}
            onClick={() => handleLinkClick("recruitment")} >
                <span className="icon">
                  <i className="fa fa-question-circle"></i>
                </span>
                <span className="text">Recruitment</span>
              </Link>
            </li>
            <li>
              <Link to="/alumni" className={activeLink === "alumni" ? "active" : ""}
            onClick={() => handleLinkClick("alumni")}>
                <span className="icon">
                  <i className="fa fa-pen"></i>
                </span>
                <span className="text">Alumni</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className={activeLink === "contactt" ? "active" : ""}
            onClick={() => handleLinkClick("contactt")}>
                <span className="icon">
                  <i className="fa fa-id-card"></i>
                </span>
                <span className="text">Contact</span>

              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}
