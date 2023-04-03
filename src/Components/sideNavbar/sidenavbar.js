import React from "react";
import "./sideNavbar.css";
import { Link } from "react-router-dom";

export default function  Sidenaavbar({setValue}) {
  return (
    <div className="sideNavbar">
      
      <div className="sidebar">
        <div className="sidebar_inner">
          <ul>
            <li>
              <Link href="/" onClick={()=>{setValue("maincon");console.log("maincon")}}>
                <span class="icon">
                  <i className="fa fa-qrcode"></i>
                </span>
                <span className="text" >Home</span>
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={()=>{setValue("about")}} >
                <span className="icon">
                  <i className="fa fa-link"></i>
                </span>
                <span className="text">About</span>
              </Link>
            </li>
            <li>
              <Link href="/" onClick={()=>{setValue("student");}}>
                <span className="icon">
                  <i className="fa fa-eye"></i>
                </span>
                <span className="text">Student</span>
              </Link>
            </li>
            <li>
              <Link href="/company" onClick={ ()=>{ setValue("company")}}>
                <span className="icon">
                  <i className="fa fa-book"></i>
                </span>
                <span className="text">Company</span>
              </Link>
            </li>
            <li>
              <Link href="/recruitment" onClick={()=>{setValue("recruitment") }}>
                <span className="icon">
                  <i className="fa fa-question-circle"></i>
                </span>
                <span className="text">Recruitment</span>
              </Link>
            </li>
            <li>
              <Link href="/" onClick={()=>{setValue("alumni");}}>
                <span className="icon">
                  <i className="fa fa-pen"></i>
                </span>
                <span className="text">Alumni</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={()=>{setValue("contact");}}>
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
