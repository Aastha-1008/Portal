import React from "react";
import "./about.css";
import dirmsg from './image/dirmsg.png';
import joindir from './image/joindir.png';
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "https://www.kiet.edu/uploads/banner_image/781145989.jpg" },
  { url: "https://i.ytimg.com/vi/jt3aMADHi9k/maxresdefault.jpg" },
  { url: "https://www.kiet.edu/uploads/banner_image/67616406.jpg" },
  { url: "https://www.kiet.edu/uploads/banner_image/749130115.jpg" },
  { url: "https://www.kiet.edu/uploads/banner_image/328360224.jpg" },
  { url: "https://www.kiet.edu/uploads/media/multiple_image_upload/8188003.jpg"},
];

export default function About() {
  const counters = document.querySelectorAll(".counter");
  window.onload = counters.forEach((counter) => {
    function updateCount() {
      const target = +counter.getAttribute("data_count");
      const count = +counter.innerHTML;

      const inc = Math.floor((target - count) / 100);

      if (count < target && inc > 0) {
        counter.innerHTML = count + inc;
        // repeat the function
        setTimeout(updateCount, 1);
      }
      // if the count not equal to target, then add remaining count
      else {
        counter.innerHTML = target;
      }
    }

    updateCount();
  });

  return (
    <div className="image-slider">
      <div className="image">
        <h1>About KIET</h1>
        <SimpleImageSlider
          width={800}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
      <div className="about_kiet">
        <p>
          KIET Group of Institutions is recognized as one of the best
          engineering colleges in Delhi-NCR. Founded by the members of Krishna
          Charitable Society in 1998 with a modest number of 180 students, KIET
          Group of Institutions has now become a pioneer in the technical
          education domain with a strength of 6500+ students.The institute has
          been accredited by NAAC with Grade 'A+' and its programmes (CSE, ECE,
          EEE, IT, ME, CE, MCA, MBA and Pharmacy) are NBA accredited.
        </p>
        <p>
          The institute has been accredited by NAAC with Grade 'A+' and its
          programmes (CSE, ECE, EEE, IT, ME, CE, MCA, MBA and Pharmacy) are NBA
          accredited.
        </p>
      </div>
      <div className="data1">
        <div className="detail">
          <h1>Students</h1>
          <p className="counter" data_count="6500">6500</p>
          <p>+</p>
        </div>
        <div className="detail">
          <h1>Acre Campus</h1>
          <p className="counter" data_count="18.20">18.20</p>
        </div>
        <div className="detail">
          <h1>Alumni</h1>
          <p className="counter" data_count="19000">19000</p>
          <p>+</p>
        </div>
        <div className="detail">
          <h1>Recruiters</h1>
          <p className="counter" data_count="303">303</p>
          <p>+</p>
        </div>
        <div className="detail">
          <h1>Job Offers</h1>
          <p className="counter" data_count="2244">2244</p>
          <p>+</p>
        </div>
        <div className="detail">
          <h1>Years Journey of Excellence </h1>
          <p className="counter" data_count="24">0</p>
          <p>+</p>
        </div>
      </div>
      <div className = "vision">
        <h1>VISION</h1>
        <p>🔵 To become a leading institution nationally in the area of professional education, research & innovation for serving the global community.</p>
        <h1>MISSION</h1>
        <li>🔴 To impart quality professional education, skills and values through outcome-based innovative teaching learning process in all spheres.</li>
        <li>🟠 To undertake collaborative interdisciplinary research as a co-requisite for professional education and simultaneously solve problems faced by society and industry.</li>
        <li>🟢 To create an ambience of innovation, entrepreneurship and consultancy for future leaders and innovators.</li>
        <li>🟣 To keep faculty members enthusiastic by continuous professional development and positive working environment.</li>
      </div>
      <img src={dirmsg} alt="director_message" style={{width: '48.1rem', position:'relative',left:'1.1rem',marginTop:'1rem',}}/>
      <img src={joindir} alt="join_director_message" style={{width: '48.5rem', position:'relative',left:'1.1rem',marginTop:'1rem',}}/>
      <h1 className="struct">Organisation Structure</h1>
      <img src="https://www.kiet.edu/uploads/department/admin/1075Sep2022.jpg" alt="kiet structure" style={{width: '48.5rem', position:'relative',left:'1.1rem',marginTop:'1rem',}}/>
    </div>
  );
}
