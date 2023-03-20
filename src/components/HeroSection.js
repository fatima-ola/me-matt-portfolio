import React from "react";
import matt from "../assets/images/mrmattt.png";
import Rectangle from "../assets/images/Rectangle.png";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='container d-flex justify-content-between '>
        <div className='user-name'>
          <h6>HI THERE👋🏻</h6>
          <h1>
            MATTHEW <br /> ABIKOYE
          </h1>
          <p>
            <img src={Rectangle} alt='rectangle' />
          </p>
          <div className='social-icons'>
            <ul>
              <li>
                <a href='https://github.com/matthewabkoye'>
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/matthew-abikoye'>
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href='https://www.matthewabikoye@gmail.com/'>
                  <MdEmail />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='photo-box'>
          <img
            src={matt}
            alt='mr-matt'
            className='img-fluid '
            width={"400px"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
