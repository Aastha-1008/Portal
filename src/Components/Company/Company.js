import React from 'react';
import './Company.css';
import compimg from './photo1.svg';
import photo2 from './photo2.svg';
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Company() {
    const mass = [
        {
            name: 'TCS',
            profile: 'Ninja & Digital',
            hiring: '120',
            ctc: '4LPA & 7.5LPA',
        },
        {
            name: 'Cognizant',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '4 & 6.75',
        },
        {
            name: 'Capgemini',
            profile: 'Analyst & Senior Analyst',
            hiring: '80',
            ctc: '4LPA, 5.5LPA & 7.5LPA',
        },
        {
            name: 'Wipro',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '4 & 6.75',
        },
        {
            name: 'Accenture',
            profile: 'Adv. ASE & ASE [ Associate Software Engineer ]',
            hiring: '80',
            ctc: '4.5LPA & 6.5LPA',
        },
        {
            name: 'HCL',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '4LPA & 6LPA',
        },
        {
            name: 'Infosys',
            profile: 'System Engineer , Digital Specialist Engineer & Specialist Programmer',
            hiring: '100',
            ctc: '3.8LPA, 6.25LPA & 9.5LPA',
        },
        {
            name: 'DXC Technology',
            profile: 'Associate Professional',
            hiring: '100',
            ctc: '4.20LPA',
        },
    ];

    const company = [
        {
            name: 'CISCO',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '14 - 18 LPA',
        },
        {
            name: 'Chaayos',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '12 LPA',
        },
        {
            name: 'Trilogy Innovations1',
            profile: 'Software Developmet Engineer',
            hiring: '80',
            ctc: '36 LPA',
        },       
        {
            name: 'TravClan1',
            profile: 'System Engineer',
            hiring: '80',
            ctc: '10 LPA',
        },
        {
            name: 'InfoEdge1',
            profile: 'Testing Engineer',
            hiring: '80',
            ctc: '10LPA',
        },
        {
            name: 'ION Group',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '14.10 LPA',
        },
        {
            name: 'Gemini Solutions1',
            profile: 'Technical Trainee',
            hiring: '80',
            ctc: '7.2 - 8 LPA',
        },
        {
            name: 'SimplifyVMS1',
            profile: 'Software Engineer',
            hiring: '80',
            ctc: '6 LPA',
        },
        {
            name: 'Amantya Technology1',
            profile: 'Developer Freshers',
            hiring: '80',
            ctc: '5.5 LPA',
        },
        {
            name: 'Hyundai MOBIS',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '4.5 LPA',
        },
        {
            name: 'IBM1',
            profile: 'Associate Software Engineer',
            hiring: '80',
            ctc: '4.5 LPA',
        },
        {
            name: 'Interra Systems1',
            profile: 'Software development ',
            hiring: '80',
            ctc: '12 LPA',
        },
        {
            name: 'Tech Mahindra',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc:'3.25 LPA and 5.5 LPA',
        },
        {
            name: 'Sopra Banking Software1',
            profile: 'Engineer Trainee',
            hiring: '80',
            ctc: '8.5 LPA',
        },
        {
            name: 'Consultadd1',
            profile: 'Management Trainee Engineer, Information System Engineer Level 1, Software Engineer Level1 & Senior Software Engineer Level 1',
            hiring: '80',
            ctc: '5 LPA, 7 LPA , 10 LPA and 12 LPA',
        },
        {
            name:'MAQ Software1',
            profile: 'Associate Software Engineer & Software Engineer',
            hiring: '80',
            ctc: '7.5 LPA',
        },
        {
            name:'PPL Work',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '10 LPA',
        },
        {
            name:'KiwiTech',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '3-4 LPA',
        },
        {
            name:'JSW',
            profile: 'Genc & Genc next',
            hiring: '80',
            ctc: '8.5 LPA',
        },
        {
            name:'Jaro Education1',
            profile: ' Graduate Trainee / Management Trainee ',
            hiring: '80',
            ctc: '8.46 LPA',
        },
        {
            name:'HealthKart1',
            profile: 'Software Developer',
            hiring: '80',
            ctc: '12 LPA',
        },
        {
            name:'Wiley Edge1',
            profile: ' Software Developer, Production Management Analyst, Site Reliability Engineer',
            hiring: '80',
            ctc: '9 LPA',
        },
        {
            name: 'RateGain Travel1',
            profile: 'Trainee-QualityAnalyst & Trainee-SoftwareDevelopment',
            hiring: '10',
            ctc: '6 LPA & 10LPA',
        },
        {
            name: 'ZIGRAM1',
            profile:'Technology Intern, Product Intern & Data Science Intern',
            hiring: '12',
            ctc: '5LPA'
        },
        {
            name: 'Kestone1',
            profile: 'Junior Developer',
            hiring: '10',
            ctc: '8 LPA',
        },
        {
            name: 'NuvertOS1',
            profile: 'Software Engineer',
            hiring: '15',
            ctc: '5 LPA',
        },
        {
            name: 'DeltaX1',
            profile: 'Product Specialist Role',
            hiring: '20',
            ctc: '4 LPA',
        },
        {
            name: 'CredAble1',
            profile: 'Associate Product Engineer',
            hiring: '20',
            ctc: '7 LPA',
        }
    ];

  return (
    <div className = "companyrecruit">
        <h1>Campus Recruiters</h1>
        <h3 className="c1">Companies hire for following Job Profiles :- </h3>
        <div className='compjobprofile'>
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
        <h1 style={{marginTop: '3rem'}} className ="c2">These companies visit in our campus :-</h1>
        <div className="compimage"><img src = {compimg} alt = "compimage"/></div>
        <div className='massrecruit'>
            <h1 className="massr">Mass Recruiters :-</h1>
            <div className="compcard_details">
                {mass.map(({name,profile,hiring,ctc})=>(
                    <div className = "compcard">
                        <div className='comphead'>
                            <h3 >{name}</h3>
                        </div>
                        <div className='compdetails'>
                            <p><b>Profile: </b>{profile}</p>
                            <p><b>Hired: <span style={{display:'inline'}}>{hiring}</span></b></p>
                            <p><b>CTC : </b>{ctc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='massrecruit'>
            <br/><br/><h1 className="massr">Other Star Recruiters :-</h1><br/><br/><br/>
            <div className="photo2"><img src = {photo2} alt = "compimage"/></div>
            <div className="compcard_details">
                {company.map(({name,profile,hiring,ctc})=>(
                    <div className = "compcard">
                        <div className='comphead'>
                            <h3 >{name}</h3>
                        </div>
                        <div className='compdetails'>
                            <p><b>Profile: </b>{profile}</p>
                            <p><b>Hired: <span style={{display:'inline'}}>{hiring}</span></b></p>
                            <p><b>CTC : </b>{ctc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <h5 style={{color:' rgb(117, 42, 25)'}}><b>Note: </b>Take advantage of off-campus internship opportunities to gain industry experience that will help you land a job at a good company.
        <br/>
        </h5>
        <h5 style={{marginTop:'2rem'}}><b>Tips:</b></h5>
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
  )
}
