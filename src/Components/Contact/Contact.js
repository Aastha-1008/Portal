import React from "react";
import kietimg from "../Contact/full-3.webp";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import thinking from "../Contact/undraw_problem_solving_re_4gq3.svg";
import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const markerIcon = new L.Icon({
  iconUrl: require("./marker.png"),
  iconSize: [35,45],
});

export default function Contact() {
  const position = [28.752412261736506, 77.49907515631247];
  return (
    <div className="contactdetails">
      <h1 className="contactheading">CONTACT US</h1>
      <div className="kietdetails">
        <div className="kietinfo">
          <h1>KIET GROUP OF INSTITUTIONS</h1>
          <p>Delhi-NCR, Ghaziabad-Meerut Road</p>
          <p>Ghaziabad-201206</p>
          <p>
            <b>Email:</b> director@kiet.edu
          </p>
          <p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;jointdirector@kiet.edu</p>
          <p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;registrar@kiet.edu</p>
          <p>
            <b>Telephone:</b> 01232-227980
          </p>
          <p>
            <b>Mobile:</b> +91-8588811998
          </p>
          <p>
            <b>Toll Free No:</b> 1800-1200-106
          </p>
        </div>
        <div className="kietimg">
          <img src={kietimg} alt="kiet" />
        </div>
      </div>
      <div className="onlineenquiryform">
      <img src={thinking} alt="thinking" className="thinking"/>
        <h1 className="submitform">SUBMIT AN ONLINE ENQUIRY</h1>
        <div className="form">
          <TextField
            id="standard-basic"
            label="Full Name*"
            variant="standard"
            style={{ width: 500 }}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Batch*"
            variant="standard"
            style={{ width: 500 }}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Phone no*"
            variant="standard"
            style={{ width: 500 }}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Mobile no.*"
            variant="standard"
            style={{ width: 500 }}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Email*"
            variant="standard"
            style={{ width: 500 }}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Query*"
            variant="standard"
            style={{ width: 500 }}
          />
          <br />
          <br />
          <TextField
            error
            id="outlined-error"
            label="Description"
            defaultValue="Write your query here"
            style={{ width: 500 }}
          />
          <br />
          <br />
          <button
            style={{
              backgroundColor: "#042331",
              color: "white",
              padding: ".5rem 2.5rem",
              borderRadius: "10px",
              fontSize: "1.5rem",
            }}
          >
            Submit
          </button>

        </div>
      </div>
      <div className="contactmap">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={markerIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
      </div>
      <div className="helpdesk">
        <div className="helpdeskhead">HELP &ensp; DESK &ensp; No.</div>
        <div className="helpnumber">1800-1200-106 (toll free)</div>
      </div>

      <div className="lastcon">
        <div
          className="kietcon"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "0rem 5rem",
          }}
        >
          KIET Group of Institutions
        </div>
        <div className="iconscon">
          <a
            href="https://www.facebook.com/kiet.edu/?ref=br_rs"
            className="iccon"
          >
            <FacebookRoundedIcon />
          </a>
          <a href="https://twitter.com/Kiet_edu" className="iccon">
            <TwitterIcon />
          </a>
          <a href="https://www.kiet.edu/" className="iccon">
            <WebAssetIcon />
          </a>
          <a
            href="https://www.instagram.com/kiet_edu/?utm_medium=copy_link"
            className="iccon"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/school/kiet-group-of-institutions/?originalSubdomain=in"
            className="iccon"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UC4rxBQyVV00oGX9-m2aqKYw"
            className="iccon"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
