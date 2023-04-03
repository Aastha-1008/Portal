import React from "react";
import "./MainCon.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function MainCon() {
  const comp = [
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.XGolMSDiqlk0jOPS6B_h8QHaEO&pid=Api&P=0',
      name: "CISCO",
      ctc: "14 - 18 LPA",
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.KYFtYjuEIPFW-EOjLbhkSAHaHa&pid=Api&P=0',
      name: "Chaayos",
      ctc: "12 LPA",
    },
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.9uCFyOXraarPLh0fdnIZawHaHa&pid=Api&P=0',
      name: "Trilogy Innovations",
      ctc: "36 LPA",
    },{},
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.UWdvElGVU9daq7He2prlUQHaHa&pid=Api&P=0',
      name: "TravClan",
      ctc: "10 LPA",
    },
    {
      image: 'https://tse1.mm.bing.net/th?id=OIP.zXKXaEJdq5pXvMq7kWWsggAAAA&pid=Api&P=0',
      name: "InfoEdge",
      ctc: "10LPA",
    },
    {
      image: 'https://tse1.mm.bing.net/th?id=OIP.xouYoOLSUPuyqRf6EvuP9QHaEf&pid=Api&P=0',
      name: "ION Group",
      ctc: "14.10 LPA",
    },{}
  ];

  const platform = [
    {
      image: 'https://tse4.mm.bing.net/th?id=OIP._j0bsQJE-X4Q3MZOxNoe3wHaHa&pid=Api&P=0',
      name: 'LeetCode',
      link: 'https://leetcode.com/',
    },
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.YmTnVNZ_yyt7CAmvVmkTNQHaE8&pid=Api&P=0',
      name: 'Coding Ninjas',
      link: 'https://www.codingninjas.com/',
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.72WzVBF3t0iGwx68T5MsUwAAAA&pid=Api&P=0',
      name: 'GeeksForGeeks',
      link: 'https://www.geeksforgeeks.org/',
    },{},
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.yVbA0EYXIzj6K902tT5j4gAAAA&pid=Api&P=0',
      name: 'TopCoder',
      link: 'https://www.topcoder.com/',
    },
    {
      image: 'https://tse4.mm.bing.net/th?id=OIP.hgcPkSpe7hqfRwv9LO8rmAHaDn&pid=Api&P=0',
      name: 'CodeChef',
      link: 'https://www.codechef.com/',
    },
    {
      image: 'https://tse1.mm.bing.net/th?id=OIP.iPZ00kImJY8oVioV5Dy75AHaD4&pid=Api&P=0',
      name: 'CodeForces',
      link: 'https://codeforces.com/',
    },{},
    {
      image: 'https://tse4.mm.bing.net/th?id=OIP.XDK2uLNvFe8JEHNCXu0nXAHaHa&pid=Api&P=0',
      name: 'HackerRank',
      link: 'https://www.hackerrank.com/',
    }

  ];

  return (
    <div className="main">
      <h1 class="kiet">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.aVo-Ti-SnzddcplNNX71PgHaGP&pid=Api&P=0"
          alt="kiet logo"
        />
        &emsp;KIET Group Of Institutions
        <br />
        <p>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
      </h1>
      <div className="top">
        <div className="adam">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSceMZ55_Aytq2I1WJgXqwa6ziXiDwmsetN3V3hyzEYpc8xr5w/viewform">
            <h1>ADAM Registration 2022-23</h1>
            <p>A - Advance</p>
            <p>D - Diploma In</p>
            <p>A - Automotive</p>
            <p>M - Mechatronics</p>
            <div className="adamDetail">
              <p>Contact - Ashish Karnwal</p>
              <p>[ 9999365444 ]</p>
              <p>ashish.Karnwal@kiet.edu</p>
            </div>
          </a>
        </div>
        <div className="courses">
          <h1>Courses - Engineering & Technology</h1>
          <p>🔴 Computer Science & Technology</p>
          <li>AI & ML</li>
          <li>AI</li>
          <p>🔵 Computer Science</p>
          <p>🟠 Information Technology</p>
          <p>🟡 Computer Science & Information Technology</p>
          <p>🟢 Electronics & Communication Engineering</p>
          <p>🟣 Electrical & Electronics Engineering</p>
          <p>🟤 Mechanical Engineering</p>
          <p>🔴 Civil Engineering</p>
        </div>
        <div class="extra_info">
          <div className="apply">
            <a href="https://admission.kiet.edu/">
              <h1>Admission - Apply Now</h1>
            </a>
            <div className="ico">
              <a
                href="https://www.facebook.com/kiet.edu/?ref=br_rs"
                className="ic"
              >
                <FacebookRoundedIcon />
              </a>
              <a href="https://twitter.com/Kiet_edu" className="ics">
                <TwitterIcon />
              </a>
              <a href="https://www.kiet.edu/" className="ics">
                <WebAssetIcon />
              </a>
              <a
                href="https://www.instagram.com/kiet_edu/?utm_medium=copy_link"
                className="ics"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/school/kiet-group-of-institutions/?originalSubdomain=in"
                className="ics"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UC4rxBQyVV00oGX9-m2aqKYw"
                className="ics"
              >
                <YouTubeIcon />
              </a>
            </div>
            <div className="procedure">
              <ul className="list">
                <a href="https://www.kiet.edu/admission-procedure">
                  <li>👉 Admission Procedure</li>
                </a>
                <a href="https://www.kiet.edu/fee-structure-for-new-students">
                  <li>👉 Fee Structure</li>
                </a>
                <a href="https://www.kiet.edu/information-brochure">
                  <li>👉 Information Brochure</li>
                </a>
                <a href="https://www.kiet.edu/syllabus">
                  <li>👉 Syllabus</li>
                </a>
                <a href="https://www.kiet.edu/academic-calendar">
                  <li>👉 Academic Calender</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="recenthiringinfo">
        <div className="record">
          <div className="data">
            <h4>Highest CTC</h4>
            <p>48.40 Lacs</p>
          </div>
          <div className="data">
            <h4>Companies</h4>
            <p>303+</p>
          </div>
        </div>
        <div className="data">
          <h4>Job Offer</h4>
          <p>2244+</p>
          <h1 class="hiringdata">Placement Data</h1>
        </div>
        <div className="comp">
          <h4>Major Recruiters</h4>
          <p>Infosys</p>
          <p>Capgemeini</p>
          <p>Cognizant</p>
          <p>Wipro</p>
          <p>HCL</p>
          <p>Accenture</p>
          <p>TCS</p>
        </div>
      </div>

      <div className="teamcrpcmain">
        <div className="card_detailsmain">
          {comp.map(({ image, name, ctc }) => (
            <div class="cardmain">
              <div className="card-topmain">
                <img src={image} alt="Blog Name" />
              </div>
              {/* <div className="card-info">
                <h2>{name}</h2>
                <span class="date">{pos}</span>
              </div> */}
              <div className="card-bottommain flex-rowmain">
                <a href="/" className="read-moremain">
                  {name}
                </a><br/>
                <a href="/" className="buttonmain btn-yellowmain">
                  {ctc}
                </a>
              </div>
            </div>
          ))}
        </div>
        <br/><br/><br/>
        
        <a href = "/" className = "readmore">&#8669;&ensp;Read More</a>
        <div className = "underline3"><hr/></div>
        <div className = "underline1"><hr/></div>
        <div className = "internship">
          <div className = "internship_heading" style={{marginBottom:'2rem'}}>
            <h1 className="internshiphead">UpComing Internship</h1>
            <p><a href="https://in.indeed.com/Internship-B-Tech-jobs?vjk=841c6686f852a8f3">Mega Hiring For IT Fresher (WFO Only, Delhi)</a></p>
            <p><a href = "https://in.indeed.com/Internship-B-Tech-jobs?vjk=5d1f4b847c943ea8">(Remote) Software Engineer Intern</a></p>
            <p><a href = "https://in.indeed.com/Internship-B-Tech-jobs?vjk=7edae7fa5394540c">PHP Development</a></p>
            <p><a href = "https://in.indeed.com/Internship-B-Tech-jobs?vjk=310708e7adb038a8">Full Stack Developer Intern</a></p>
            <p><a href = "https://in.indeed.com/jobs?q=Internship+B+Tech&start=10&pp=gQAPAAAAAAAAAAAAAAAB7Hv7kQAeAQEBBx6ikxXdL71o2arsThIgDxMmslhhBuzoKp1tAAA&vjk=be3bab64d4b8992d">HTML Development Internship</a></p>
            <p><a href = "https://in.indeed.com/jobs?q=Internship+B+Tech&start=30&pp=gQAtAAAAAAAAAAAAAAAB7Hv7kQA7AQIBChYGBSVWTz1_niI3Ph5yIOkNFM-CAVeWIobAwtND2f2sAr5ZeTTDrVzD8EfbR8YOdF97vD4-4jgAAA&vjk=094e5f6e4ca962e9">Frontend Developer</a></p>
          </div>
          <div className="internshipdate" style={{marginBottom:'2rem'}}>
            <h1 className ="internshiphead">Stipend [ Month ]</h1>
            <p>₹ 5000 - 7000 </p>
            <p>₹ 7500</p>
            <p> - </p>
            <p>₹ 8,000 - ₹ 12,000 </p>
            <p>₹ 3,000 - ₹ 8,000</p>
            <p>₹ 10,000</p>
          </div>
          <div className="internshipplatform">
            <h1>Internship Platform</h1>
            <p><a href="https://internshala.com/">&#x2713; Internshala</a></p>
            <p><a href="https://www.glassdoor.co.in/">&#x2713; GlassDoor</a></p>
            <p><a href="https://www.linkedin.com/">&#x2713; LinkedIn</a></p>
            <p><a href="https://www.codingninjas.com/">&#x2713; Coding Ninjas</a></p>
            <p><a href="https://www.chegg.com/">&#x2713; Chegg</a></p>
          </div>
        </div>
        <p className="internin">&#x2713; InternIn</p>
        <div className = "internshipplat">
          <p><a href="https://www.internjobs.com/">&#x2713; InternJobs</a></p>
          <p><a href="https://diversity.com/">&#x2713; Experience.com</a></p>
          <p><a href="https://diversity.com/">&#x2713; Diversity.com</a></p>
        </div>
        <div className = "underline2"><hr/></div>
      </div>

      <div className="codingplatform">
        <h1 className = "platform">Popular Coding Platform</h1>
        <div className="teamcrpcmain">
        <div className="card_detailsmain">
          {platform.map(({ image, name, link }) => (
            <div class="cardmain">
              <div className="card-topmain">
                <img src={image} alt="Blog Name" />
              </div>
              <div className="card-bottommain flex-row">
                <a href="/" className="read-moremain">
                  {name}
                </a><br/>
                <a href={link} className="buttonmain btn-yellowmain">
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
</div>
      <div className= "last">
        <div className = "kiet" style={{textDecoration:'none',color:'white',padding: '0rem 5rem'}}>KIET Group of Institutions</div>
        <div className = "icons">
          <a href="https://www.facebook.com/kiet.edu/?ref=br_rs" className = "ic"><FacebookRoundedIcon/></a>
          <a href="https://twitter.com/Kiet_edu" className = "ic"><TwitterIcon/></a>
          <a href="https://www.kiet.edu/" className = "ic"><WebAssetIcon/></a>
          <a href="https://www.instagram.com/kiet_edu/?utm_medium=copy_link" className = "ic"><InstagramIcon/></a>
          <a href="https://www.linkedin.com/school/kiet-group-of-institutions/?originalSubdomain=in" className = "ic"><LinkedInIcon/></a>
          <a href="https://www.youtube.com/channel/UC4rxBQyVV00oGX9-m2aqKYw" className = "ic"><YouTubeIcon/></a>
        </div>
      </div>
    </div>
  );
}
