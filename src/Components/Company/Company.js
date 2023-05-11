import React,{useState,useEffect} from "react";
import "./Company.css";
import compimg from "./photo1.svg";
import photo2 from "./photo2.svg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useAuth0 } from "@auth0/auth0-react";


export default function Company() {
  const { user } = useAuth0();
  let newProfileName = React.createRef();
  let newCompanyName = React.createRef();
  let newHiringNumber = React.createRef();
  let newCTC = React.createRef();
  let newLink = React.createRef();
  const [mass,setMass] = useState([
    {
      name: "TCS",
      profile: "Ninja & Digital",
      hiring: "120",
      ctc: "4LPA & 7.5LPA",
      link: "https://www.tcs.com/who-we-are",
    },
    {
      name: "Cognizant",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "4 & 6.75",
      link: "https://www.cognizant.com/in/en",
    },
    {
      name: "Capgemini",
      profile: "Analyst & Senior Analyst",
      hiring: "80",
      ctc: "4LPA, 5.5LPA & 7.5LPA",
      link: "https://www.capgemini.com/about-us/",
    },
    {
      name: "Wipro",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "4 & 6.75",
      link: "https://www.wipro.com/about-us/",
    },
    {
      name: "Accenture",
      profile: "Adv. ASE & ASE [ Associate Software Engineer ]",
      hiring: "80",
      ctc: "4.5LPA & 6.5LPA",
      link: "https://www.accenture.com/in-en/about/company-index",
    },
    {
      name: "HCL",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "4LPA & 6LPA",
      link: "https://www.hcltech.com/about-us",
    },
    {
      name: "Infosys",
      profile:
        "System Engineer , Digital Specialist Engineer & Specialist Programmer",
      hiring: "100",
      ctc: "3.8LPA, 6.25LPA & 9.5LPA",
      link: "https://www.infosys.com/about.html",
    },
    {
      name: "DXC Technology",
      profile: "Associate Professional",
      hiring: "100",
      ctc: "4.20LPA",
      link: "https://dxc.com/in/en/about-us",
    },
  ]);

  const [company,setCompany] = useState([
    {
      name: "CISCO",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "14 - 18 LPA",
    },
    {
      name: "Chaayos",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "12 LPA",
    },
    {
      name: "Trilogy Innovations1",
      profile: "Software Developmet Engineer",
      hiring: "80",
      ctc: "36 LPA",
    },
    {
      name: "TravClan1",
      profile: "System Engineer",
      hiring: "80",
      ctc: "10 LPA",
    },
    {
      name: "InfoEdge1",
      profile: "Testing Engineer",
      hiring: "80",
      ctc: "10LPA",
    },
    {
      name: "ION Group",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "14.10 LPA",
    },
    {
      name: "Gemini Solutions1",
      profile: "Technical Trainee",
      hiring: "80",
      ctc: "7.2 - 8 LPA",
    },
    {
      name: "SimplifyVMS1",
      profile: "Software Engineer",
      hiring: "80",
      ctc: "6 LPA",
    },
    {
      name: "Amantya Technology1",
      profile: "Developer Freshers",
      hiring: "80",
      ctc: "5.5 LPA",
    },
    {
      name: "Hyundai MOBIS",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "4.5 LPA",
    },
    {
      name: "IBM1",
      profile: "Associate Software Engineer",
      hiring: "80",
      ctc: "4.5 LPA",
    },
    {
      name: "Interra Systems1",
      profile: "Software development ",
      hiring: "80",
      ctc: "12 LPA",
    },
    {
      name: "Tech Mahindra",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "3.25 LPA and 5.5 LPA",
    },
    {
      name: "Sopra Banking Software1",
      profile: "Engineer Trainee",
      hiring: "80",
      ctc: "8.5 LPA",
    },
    {
      name: "Consultadd1",
      profile:
        "Management Trainee Engineer, Information System Engineer Level 1, Software Engineer Level1 & Senior Software Engineer Level 1",
      hiring: "80",
      ctc: "5 LPA, 7 LPA , 10 LPA and 12 LPA",
    },
    {
      name: "MAQ Software1",
      profile: "Associate Software Engineer & Software Engineer",
      hiring: "80",
      ctc: "7.5 LPA",
    },
    {
      name: "PPL Work",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "10 LPA",
    },
    {
      name: "KiwiTech",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "3-4 LPA",
    },
    {
      name: "JSW",
      profile: "Genc & Genc next",
      hiring: "80",
      ctc: "8.5 LPA",
    },
    {
      name: "Jaro Education1",
      profile: " Graduate Trainee / Management Trainee ",
      hiring: "80",
      ctc: "8.46 LPA",
    },
    {
      name: "HealthKart1",
      profile: "Software Developer",
      hiring: "80",
      ctc: "12 LPA",
    },
    {
      name: "Wiley Edge1",
      profile:
        " Software Developer, Production Management Analyst, Site Reliability Engineer",
      hiring: "80",
      ctc: "9 LPA",
    },
    {
      name: "RateGain Travel1",
      profile: "Trainee-QualityAnalyst & Trainee-SoftwareDevelopment",
      hiring: "10",
      ctc: "6 LPA & 10LPA",
    },
    {
      name: "ZIGRAM1",
      profile: "Technology Intern, Product Intern & Data Science Intern",
      hiring: "12",
      ctc: "5LPA",
    },
    {
      name: "Kestone1",
      profile: "Junior Developer",
      hiring: "10",
      ctc: "8 LPA",
    },
    {
      name: "NuvertOS1",
      profile: "Software Engineer",
      hiring: "15",
      ctc: "5 LPA",
    },
    {
      name: "DeltaX1",
      profile: "Product Specialist Role",
      hiring: "20",
      ctc: "4 LPA",
    },
    {
      name: "CredAble1",
      profile: "Associate Product Engineer",
      hiring: "20",
      ctc: "7 LPA",
    },
  ]);

  const massSearch = () => {
    const searchMassRecInput = document.querySelector("#searchMassRec");
    const cardMassRecList = document.querySelectorAll(".massRec");
    console.log(searchMassRecInput);

    searchMassRecInput.addEventListener("keyup", function (event) {
      const searchTerm = event.target.value.toLowerCase();
      console.log(searchTerm);
      cardMassRecList.forEach(function (card) {
        const cardHeading = card
          .querySelector(".card-header h3")
          .textContent.toLowerCase();
        if (cardHeading.indexOf(searchTerm) !== -1) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  };

  const starSearch = () => {
    const searchInput = document.querySelector("#search");
    const cardList = document.querySelectorAll(".starRecruiters");
    searchInput.addEventListener("keyup", function (event) {
      const searchTerm = event.target.value.toLowerCase();
      console.log(searchTerm);
      cardList.forEach(function (card) {
        const cardHeading = card
          .querySelector(".card-header h3")
          .textContent.toLowerCase();
        if (cardHeading.indexOf(searchTerm) !== -1) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  };

  const createNewMassCompany = () =>{
    const Name = newCompanyName.current.value;
    const Profile = newProfileName.current.value;
    const Hiring = newHiringNumber.current.value;
    const CTC = newCTC.current.value;
    const Link = newLink.current.value;

    const newObj = {
      name: Name,
      profile: Profile,
      hiring: Hiring,
      ctc: CTC,
      link: Link
    };
    console.log(newObj);
    newCompanyName.current.value  = "";
    newProfileName.current.value = "";
    newHiringNumber.current.value = "";
    newCTC.current.value = "";
    newLink.current.value = "";
    setMass([...mass,newObj]);
  };
  const createNewStarCompany = () =>{

    const newObj = {
      name: newCompanyName.current.value,
      profile: newProfileName.current.value,
      hiring: newHiringNumber.current.value,
      ctc: newCTC.current.value,
      link: newLink.current.value
    };
    newCompanyName.current.value  = "";
    newProfileName.current.value = "";
    newHiringNumber.current.value = "";
    newCTC.current.value = "";
    newLink.current.value = "";
    setCompany([...company,newObj]);
  };
  useEffect(() => {
    const storedList1 = localStorage.getItem("mass");
    const storedList2 = localStorage.getItem("company");
    if (storedList1) {
      setMass(JSON.parse(storedList1));
    }
    if (storedList2) {
      setCompany(JSON.parse(storedList2));
    }
  }, []);

 useEffect(()=>{
  localStorage.setItem("mass",JSON.stringify(mass));
 },[mass]);

//  useEffect(()=>{
//   localStorage.setItem("company",JSON.stringify(company));
//  },[company]);

  return (
    

    <div className="companyrecruit">
      <h1>Campus Recruiters</h1>
      <h3 className="c1">Companies hire for following Job Profiles :- </h3>
      <div className="compjobprofile">
        <p>🔴Software Developer</p>
        <p>🟡Full Stack Developer</p>
        <p>⭕Front-End Developer</p>
        <p>⭕Back-End Developer</p>
        <p>🔵Application Analyst</p>
        <p>🟣Information Security Analyst</p>
        <p>⭕Network Security Engineer</p>
        <p>⭕Data Scientist</p>
        <p>🟢System Engineer</p>
        <p>🔵Java Developer</p>
        <p>⭕Data Engineer</p>
        <p>⭕Programmer Analyst</p>
        <p>🟡Graphic Designer</p>
        <p>🟣Database Manager</p>
        <p>⭕Testing Engineer</p>
        <p>⭕Software Quality Analyst</p>
        <p>🟠Information System Engineer</p>
        <p>🟢Manageent Trainee Engineer</p>
        <p>⭕Rotational Analyst</p>
        <p>⭕MEAN Stack Developer</p>
        <p>🔴WordPress Developers</p>
        <p>🟣Cloud Manager</p>
      </div>
      <h1 style={{ marginTop: "3rem" }} className="c2">
        These companies visit in our campus :-
      </h1>
      <div className="compimage">
        <img src={compimg} alt="compimage" />
      </div>
      <div className="massrecruit">
        <h1 className="massr">Mass Recruiters :-</h1>
        <input
          type="text"
          id="searchMassRec"
          placeholder="Search..."
          onChange={massSearch}
        />
        <br/>
        {user.role === "CRPC Head" ? (
        <div className="createUser">
          <input type="text" placeholder="Company Name" ref={newCompanyName} />
          <input type="text" placeholder="Profile Name" ref={newProfileName} />
          <input
            type="text"
            placeholder="Number Of Hiring"
            ref={newHiringNumber}
          />
          <input type="text" placeholder="CTC" ref={newCTC} />
          <input
            type="text"
            placeholder="Company offical website link"
            ref={newLink}
          />
          <button className="Add" onClick={createNewMassCompany}>Add </button>        </div>
      ) : (
        ""
      )}
        <br />
        <br />
        <div className="compcard_details">
          {mass.map(({ name, profile, hiring, ctc, link }) => (
            <div className="compcard massRec">
              <div className="comphead card-header">
                <h3>{name}</h3>
              </div>
              <div className="compdetails">
                <p>
                  <b>Profile: </b>
                  {profile}
                </p>
                <p>
                  <b>
                    Hired: <span style={{ display: "inline" }}>{hiring}</span>
                  </b>
                </p>
                <p>
                  <b>CTC : </b>
                  {ctc}
                </p>
              </div>
              <p className="companyVisit">
                <a href={link}>Visit</a>
              </p>
            </div>
          ))}
          
        </div>
      </div>
      <div className="massrecruit">
        <br />
        <br />
        <h1 className="massr">Other Star Recruiters :-</h1>
        <br />
        <br />
        <br />
        <input
          type="text"
          id="search"
          placeholder="Search..."
          onChange={starSearch}
        />
        <br/>
        {user.role === "CRPC Head" ? (
        <div className="createUser">
          <input type="text" placeholder="Company Name" ref={newCompanyName} />
          <input type="text" placeholder="Profile Name" ref={newProfileName} />
          <input
            type="text"
            placeholder="Number Of Hiring"
            ref={newHiringNumber}
          />
          <input type="text" placeholder="CTC" ref={newCTC} />
          <input
            type="text"
            placeholder="Company offical website link"
            ref={newLink}
          />
          <button className="Add" onClick={createNewStarCompany}>Add</button>        </div>
      ) : (
        ""
      )}
        <br />
        <br />
        {(user.role==="CRPC Head")?<div className="photo21">
          <img src={photo2} alt="compimage" />
        </div>:
        <div className="photo2">
          <img src={photo2} alt="compimage" />
        </div>}
        <div className="compcard_details">
          {company.map(({ name, profile, hiring, ctc }) => (
            <div className="compcard starRecruiters">
              <div className="comphead card-header">
                <h3>{name}</h3>
              </div>
              <div className="compdetails">
                <p>
                  <b>Profile: </b>
                  {profile}
                </p>
                <p>
                  <b>
                    Hired: <span style={{ display: "inline" }}>{hiring}</span>
                  </b>
                </p>
                <p>
                  <b>CTC : </b>
                  {ctc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h5 style={{ color: " rgb(117, 42, 25)" }}>
        <b>Note: </b>Take advantage of off-campus internship opportunities to
        gain industry experience that will help you land a job at a good
        company.
        <br />
      </h5>
      <h5 style={{ marginTop: "2rem" }}>
        <b>Tips:</b>
      </h5>
      <p className="p1">
        <ol>
          <li>Do various internship in your domain.</li>
          <li>Work on real world problems.</li>
          <li>Create various projects of your domain.</li>
          <li>Involve in various extra curricular activities.</li>
        </ol>
      </p>
      <div className="lastcomp">
        <div
          className="kietcomp"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "0rem 5rem",
          }}
        >
          KIET Group of Institutions
        </div>
        <div className="iconscomp">
          <a
            href="https://www.facebook.com/kiet.edu/?ref=br_rs"
            className="iccomp"
          >
            <FacebookRoundedIcon />
          </a>
          <a href="https://twitter.com/Kiet_edu" className="iccomp">
            <TwitterIcon />
          </a>
          <a href="https://www.kiet.edu/" className="iccomp">
            <WebAssetIcon />
          </a>
          <a
            href="https://www.instagram.com/kiet_edu/?utm_medium=copy_link"
            className="iccomp"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/school/kiet-group-of-institutions/?originalSubdomain=in"
            className="iccomp"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UC4rxBQyVV00oGX9-m2aqKYw"
            className="iccomp"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
