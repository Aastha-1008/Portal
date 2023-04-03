import React from "react";
import "./Student.css";
import book1 from "./book1.svg";
import book2 from "./book2.svg";
import book3 from "./book3.svg";
import book4 from "./book4.svg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Student() {
  const student = [
    {
      name: "Aastha Chaudhary",
      branch: "CS",
      offer: "Healthkart",
      linkedin: "https://www.linkedin.com/in/aastha-chaudhary-4b21271a0/",
    },
    {
      name: "Sanchita Mishra",
      branch: "CS",
      offer: "Amazon",
      linkedin: "",
    },
    {
      name: "Aaditya Raj Sharma",
      branch: "CS",
      offer: "Capgemini",
      linkedin: "",
    },
    {
      name: "Garima Kushwaha",
      branch: "CS",
      offer: "Amantya",
      linkedin: "",
    },
    {
      name: "Chetna",
      branch: "CS",
      offer: "Accenture",
      linkedin: "",
    },
    {
      name: "Aayush Srivastava",
      branch: "CS",
      offer: "Ion groups",
      linkedin: "",
    },
    {
      name: "Amish Mishra",
      branch: "CS",
      offer: "Capgemini",
      linkedin: "",
    },
    {
      name: "Arjun",
      branch: "CS",
      offer: "TCS - Digital",
      linkedin: "",
    },
    {
      name: "Ritika Singh",
      branch: "CSE",
      offer: "Amazon",
      linkedin: "",
    },
    {
      name: "Surbhi Sawan",
      branch: "CSE",
      offer: "Cognizant",
      linkedin: "",
    },
    {
      name: "Himanshi Tyagi",
      branch: "CSE",
      offer: "DXC",
      linkedin: "",
    },
    {
      name: "Aaryan Singh",
      branch: "CS",
      offer: "Infosys",
      linkedin: "",
    },
  ];
  return (
    <div className="studentclass">
      <h1 className="studenthead">Student Placement Policy</h1>
      <div className="studentcontent">
        <div className="placementpolicy">
          <p>
            1️⃣ Placement seeking students need to appear in all the following
            companies till they earn one offer from any of the below company or
            subsequent companies visiting for Campus Recruitment-
            <div className="placementcomplist">
              <ul style={{ listStyle: "none" }}>
                <li>🔴Infosys</li>
                <li>🟣Capgemini </li>
                <li>🔵Accenture</li>
                <li>🟢TCS</li>
                <li>🟡Cognizant</li>
                <li>🟠Tech Mahindra</li>
                <li>🔴Wipro</li>
                <li>🟣DXC</li>
                <li>🔵HCL</li>
              </ul>
            </div>
          </p>
          <p>
            2️⃣ It is mandatory for all eligible branches (CSE, CS, CSIT, IT, EC,
            EEE, ME, CE and MCA) students to appear in the placement drives of
            the above companies. Eligible students who will not participate in
            the above companies’ drive will not be given any placement
            assistance in future for any type of Campus Placement opportunity
            and it will be considered that they are not interested in the campus
            placement.
          </p>
          <p>
            3️⃣ Students selected in any of the company from CS/IT/EC/MCA will be
            eligible to take second opportunity from subsequent recruitment
            processes if CTC is Rs. 3.00 LPA higher than the previous offer.
          </p>
          <p>
            4️⃣ The Super Dream/Dream status opportunity will be provided to all
            eligible students of all streams.
          </p>
          <p>
            5️⃣ In case the result of the first company is not declared, the
            student will be allowed for another opportunity.
          </p>
          <p>
            6️⃣ If any student, who is already placed and found sitting in next
            drive without prior permission from the CRPC Department; the offer
            of that student from the 1st Company will be cancelled.
          </p>
        </div>
        <div></div>
        <div className="studentlinkedIn">
          <h5>2023 Batch student - KIET </h5>
          <div className="studdetails">
            {student.map(({ name, branch, offer, linkedin }) => (
              <div className="studentcard">
                <div className="studentdet">
                  <h5>
                    {name} [ {branch}]
                  </h5>
                  <p>
                    <b>Offer- </b>
                    {offer}
                  </p>
                  <p>
                    {" "}
                    <b>Visit : </b>
                    <a href={linkedin}>LinkedIn </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="studpreparationmethod">
        <div className="studentimagestudy">
          <img src={book1} alt="book1" />
          <img src={book2} alt="book2" />
          <img src={book3} alt="book3" />
        </div>
        <div className="studentpreparation">
          <h1> Placement Preparation Guide</h1>
          <p>
            1️⃣ Explore all domains, especially if you're in your first year of
            B.tech.
          </p>
          <p>
            2️⃣ Learning at least one <b>Programming language</b> [ C, Cpp , Java
            , Python and so on] will help you better understand technology, and
            ensure you don't feel left behind!
          </p>
          <p>
            3️⃣ Improve your <b>communication skills </b>as you will have to
            appear in an interview where you will eventually have to communicate
            with confidence.
          </p>
          <ul>
            <li>Participate in group discussion.</li>
            <li>Participate in debate competition.</li>
            <li>Speak up about your thoughts and ideas</li>
            <li>
              Work on Non-Verbal communication[ Eye contact, Good Posture ]
            </li>
          </ul>
          <p>
            4️⃣ <b>Resume Building -</b> A resume is a brief summary of your
            skills and experience over one or two pages.
          </p>
          <p>
            5️⃣ Start Learning <b>Aptitude </b>as soon as possible. Most
            companies conduct primary exams as aptitude tests.
          </p>
          <ul>
            <li>Verbal Ability </li>
            <li>Puzzle</li>
            <li>Pattern</li>
            <li>Mathematical aptitude</li>
          </ul>
          <p>
            6️⃣ Participate in <b>Hackathons</b> - This will help you stand out
            from the crowd.
          </p>
          <p>
            7️⃣ Focus more on <b>DSA</b> and stay consistent with{" "}
            <b>competitive coding.</b>
          </p>
          <p>
            8️⃣ Must focus on these <b>subjects:</b>
          </p>
          <ul>
            <li>DSA</li>
            <li>DAA</li>
            <li>Operating System</li>
            <li>DBMS</li>
            <li>OOPS</li>
            <li>Computer Networks</li>
          </ul>
          <p>
            9️⃣ Learn <b>Domain related skills :</b> For Example - In Web
            Technology, learn HTML , CSS , JavaScript , REACTJS , Node.js
          </p>
          <p>
            🔟 Atleast make <b>2-3 projects</b> related to your domain.
          </p>
          <p></p>
        </div>
      </div>
      <div className="studentdsa">
        <div className="studentdsa1">
          <h1>Learn Data Structure and Algorithm: </h1>
          <ol>
            <li>Array</li>
            <li>String</li>
            <li>LinkedList</li>
            <li>Search Algorithm</li>
            <li>Sorting Algorithm</li>
            <li>Divide & Conquer Algorithm</li>
            <li>Stack</li>
            <li>Queue</li>
            <li>Trees</li>
            <li>Graph</li>
            <li>Greedy</li>
            <li>Recursion</li>
            <li>Backtracking</li>
            <li>Dynamic Programming</li>
          </ol>
          <h5>
            <b>Note:</b> Focus more on Complexity.
          </h5>
        </div>
        <div className="studentdsa2">
          <img src={book4} alt="book4" />
        </div>
      </div>
      <div className="studentplatform">
        <div className = "codingplatforms">
          <h3>Track your coding journey through :-</h3>
          <ol>
            <li>LeetCode</li>
            <li>GeeksForGeeks</li>
            <li>CodingNinjas</li>
            <li>CodeChef</li>
            <li>CodeForces</li>
          </ol>
        </div>
        <div className = "demandingtechno">
          <h3>Trending Technology :-</h3>
          <ol>
            <li>BlockChain</li>
            <li>AI & ML</li>
            <li>IoT</li>
            <li>Virtual Reality and Augmented Reality</li>
            <li>Cyber Security</li>
          </ol>
        </div>
      </div>
      <p className="studentnote"><b>Note :-</b> Apply for internship as soon as possible, this helps you to get industry experience.</p>
      <div className="laststu">
        <div
          className="kietstu"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "0rem 5rem",
          }}
        >
          KIET Group of Institutions
        </div>
        <div className="iconsstu">
          <a
            href="https://www.facebook.com/kiet.edu/?ref=br_rs"
            className="iccon"
          >
            <FacebookRoundedIcon />
          </a>
          <a href="https://twitter.com/Kiet_edu" className="icstu">
            <TwitterIcon />
          </a>
          <a href="https://www.kiet.edu/" className="icstu">
            <WebAssetIcon />
          </a>
          <a
            href="https://www.instagram.com/kiet_edu/?utm_medium=copy_link"
            className="icstu"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/school/kiet-group-of-institutions/?originalSubdomain=in"
            className="icstu"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UC4rxBQyVV00oGX9-m2aqKYw"
            className="icstu"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
