import React from "react";
import Rectangle from "../assets/images/Rectangle.png";
import line from "../assets/images/line.png";

const Experience = () => {
  return (
    <div className="container exp-cont text-danger">
      <h1>Experience</h1>
      <p className="exp-rectangle">
        <img src={Rectangle} alt='rectangle' />
      </p>
      <div className='experience'>
        <div className='d-flex justify-content-evenly'>
          <div>
            <div className="roles">
              <h6>Lead Software Engineer</h6>
              <p className="work-place">eTranzact International PLC</p>
            </div>
            <div className="roles">
              <h6>Senior Software Engineer</h6>
              <p className="work-place">Team Apt</p>
            </div>
            <div className="roles">
              <h6>Head Of Software Development</h6>
              <p className="work-place">Vas2nets Technologies Ltd</p>
            </div>
            <div className="roles">
              <h6>Software Engineer (Assistant Manager)</h6>
              <p className="work-place">eTranzact International PLC</p>
            </div>
          </div>
          <div >
          <img src={line} alt='line' className="line"/>
          </div>
          <div className="year">
            <p>Feb 2020 - Present</p>
            <p>July 2019 - Apr 2020</p>
            <p>May 2019 - June 2019</p>
            <p>Feb 2016 - May 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
