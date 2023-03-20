import React from "react";
import Rectangle from "../assets/images/Rectangle.png";
import { Card, Button } from "../components";
import {MdOutlineDesktopMac} from 'react-icons/md';
import {TbFileCertificate} from 'react-icons/tb';
import {HiPresentationChartLine} from 'react-icons/hi';

const Skills = () => {
  return (
    <div className="proficiency container">
      <h1>Proficiency</h1>
      <p>
        <img src={Rectangle} alt='rectangle' />
      </p>
      <p className="text-center bio-info">
        Experienced Software Engineer with a demonstrated history of working in
        various financial services industry. Skilled in diverse programming
        languages, a great team player with proven broad knowledge of
        technologies that can enable and facilitate ease of project development,
        deployment, maintenance and support of software systems which will
        enable innovative products function and scale maximally.
      </p>
      <div className='d-flex justify-content-between text-center'>
        <Card title={"Expertise"} describe={"Senior Software Engineer"} icon={<span className="card-icon"><MdOutlineDesktopMac/></span>} className="card1"/>
        <Card title={"Experience"} describe={"7 years"} icon={<span className="cert-icon"><TbFileCertificate/></span>} className="card2"/>
        <Card title={"Projects"} describe={"19 projects supervised"} icon={<span className="card-icon"><HiPresentationChartLine/></span>} className="card1"/>
      </div>
      <div className="viewGithub text-center">
        <Button label={"View Github Profile"} />
      </div>
      <div className='skill-card border-2 border-dashed'>
        <h6 className="text-center mt-4 mb-3">SKILLS</h6>        
        <div className='d-flex justify-content-evenly'>
          <div>
            <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>MYSQL</li>
                <li>EJB</li>
                <li>JPA</li>
                <li>JSP</li>
            </ul>
          </div>
          <div>
          <ul>
                <li>JSF</li>
                <li>Angular</li>
                <li>Spring boot</li>
                <li>Technical Support</li>
                <li>Circle CI</li>
                <li>C++</li>
            </ul>
          </div>
          <div>
          <ul>
                <li>Jenkins</li>
                <li>Docker</li>
                <li>JavaScript</li>
                <li>Linux system <br />Administration</li>
                <li>USSD & POS Application <br />development</li>
            </ul>
          </div>
          <div>
          <ul>
                <li>Restful & SOAP <br />service development</li>
                <li>Value Added Service <br />support</li>
                <li>Third Party API <br />Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
